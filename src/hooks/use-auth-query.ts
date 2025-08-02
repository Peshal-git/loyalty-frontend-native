import { UserLoginDTO, UserRegisterDTO } from "@/generated";
import { client } from "../api/client";
import useAuthStore from "../stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useLogin = () => {
  const { setAuth, clearAuth } = useAuthStore();
  return useMutation({
    mutationFn: (params: UserLoginDTO) => client.login(params),
    onSuccess: (data) => {
      if (!data.data.data) {
        return clearAuth();
      }
      setAuth(data.data?.data?.token ?? null, data.data?.data?.user ?? null);
    },
    onError: () => {
      clearAuth();
    },
  });
};

export const useSignup = () => {
  const { setAuth, clearAuth } = useAuthStore();
  return useMutation({
    mutationFn: (params: UserRegisterDTO) => client.signup(params),
    onSuccess: (data) => {
      if (!data.data.data) {
        return clearAuth();
      }
      setAuth(data.data?.data?.token ?? null, data.data?.data?.user ?? null);
    },
    onError: () => {
      clearAuth();
    },
  });
};

export const useLoginWithGoogle = () => {
  const { setAuth, clearAuth } = useAuthStore();
  return useMutation({
    mutationFn: (code: string) => client.googleLogin(code),
    onSuccess: (data) => {
      if (!data.data.data) {
        return clearAuth();
      }
      setAuth(data.data?.data?.token ?? null, data.data?.data?.user ?? null);
    },
    onError: () => {
      clearAuth();
    },
  });
};

export const useLoginWithLine = () => {
  const { setAuth, clearAuth } = useAuthStore();
  return useMutation({
    mutationFn: (code: string) => client.lineLogin({ code }),
    onSuccess: (data) => {
      if (!data.data.data) {
        return clearAuth();
      }
      setAuth(data.data?.data?.token ?? null, data.data?.data?.user ?? null);
    },
    onError: () => {
      clearAuth();
    },
  });
};

export const useLogout = () => {
  const { clearAuth } = useAuthStore();
  const router = useRouter();

  return useMutation({
    mutationFn: () => client.logout(),
    onSuccess: () => {
      clearAuth();
    },
    onError: () => {
      clearAuth();
      router.replace("/");
    },
  });
};
