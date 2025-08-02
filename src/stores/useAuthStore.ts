import { UserResponseData } from "@/api";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: UserResponseData | null;
  setAuth: (token: string | null, user: UserResponseData | null) => void;
  clearAuth: () => void;
  hasRole: (role: string) => boolean;
  clearNeedsExtraInfo: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      isAuthenticated: false,
      user: null,
      setAuth: (token, user) =>
        set({
          accessToken: token,
          isAuthenticated: Boolean(token),
          user: token ? user : null,
        }),
      clearAuth: () =>
        set({
          accessToken: null,
          isAuthenticated: false,
          user: null,
        }),
      hasRole: (role) => get().user?.roles.includes(role) ?? false,
      clearNeedsExtraInfo: () =>
        set((state) => ({
          user: state.user ? { ...state.user, needsExtraInfo: false } : null,
        })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
export type AuthContext = AuthState;
