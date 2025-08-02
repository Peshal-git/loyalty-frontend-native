import "react-native-url-polyfill/auto";
import { DefaultApi, Configuration } from "@/generated";
import axios from "axios";
import useAuthStore from "../stores/useAuthStore";
import Toast from "react-native-toast-message";
import { BASE_PATH } from "@/generated/base";

interface RefreshResponse {
  data: { token: string } | null;
  error?: any;
}

const axiosInstance = axios.create({
  baseURL: BASE_PATH,
  withCredentials: true,
});

const client = new DefaultApi(
  new Configuration({
    basePath: BASE_PATH,
  }),
  BASE_PATH,
  axiosInstance
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["x-org-id"] = "a0wBS000000JxM9YAK";

    console.log("Outgoing Request:", {
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data,
    });

    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;

axiosInstance.interceptors.response.use(
  async (response) => {
    if (!navigator.onLine) {
      Toast.show({
        type: "error",
        text1: "No internet connection",
      });
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const response = error.response;

    if (response?.status === 401 && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshResponse = await client.refresh();
          const refreshData = refreshResponse.data as RefreshResponse;

          if (refreshData.data?.token) {
            isRefreshing = false;

            originalRequest.headers["Authorization"] =
              `Bearer ${refreshData.data.token}`;
            originalRequest._retry = true;
            return axiosInstance(originalRequest);
          } else {
            throw new Error("No token in refresh response");
          }
        } catch (refreshError) {
          isRefreshing = false;
          useAuthStore.getState().clearAuth();
          Toast.show({
            type: "error",
            text1: "Session expired. Please login again.",
          });
          return Promise.reject(error);
        }
      } else {
        useAuthStore.getState().clearAuth();
        Toast.show({
          type: "error",
          text1: "Session expired. Please login again.",
        });
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export { client, axiosInstance };
