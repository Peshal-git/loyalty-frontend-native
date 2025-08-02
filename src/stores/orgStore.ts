import { getOrg, OrgInfo } from "@/api";
import { FastAverageColor } from "fast-average-color";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface OrgState {
  orgInfo: OrgInfo | null;
  isLoading: boolean;
  error: string | null;
  orgBackground: string;
  setOrg: (forceFetch: boolean) => Promise<void>;
}

const useOrgStore = create<OrgState>()(
  persist(
    (set, get) => ({
      orgInfo: null,
      isLoading: false,
      error: null,
      orgBackground: "",
      setOrg: async (forceFetch = false) => {
        const { orgInfo } = get();
        if (!forceFetch && orgInfo) return;

        set({ isLoading: true, error: null });

        for (let i = 0; i < 3; i++) {
          try {
            const response = await getOrg();
            const fac = new FastAverageColor();

            fac
              .getColorAsync(response.data?.data?.logo ?? "")
              .then((color) => {
                const isLight = color.isLight;
                isLight
                  ? set({ orgBackground: "bg-gray-800" })
                  : set({ orgBackground: "bg-white" });
              })
              .catch(() => {
                set({ orgBackground: "bg-gray-100" });
              });
            set({
              orgInfo: response.data?.data,
              isLoading: false,
              error: null,
            });
            return;
          } catch (error) {
            if (i === 2) {
              set({
                error:
                  error instanceof Error
                    ? error.message
                    : "Failed to fetch organization info",
                isLoading: false,
              });
            }
          }
        }
      },
    }),
    {
      name: "org-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrgStore;
export type OrgContext = OrgState;
