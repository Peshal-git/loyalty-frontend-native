import { OrgInfo } from "@/generated";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { client } from "../api/client";

interface OrgState {
  orgInfo: OrgInfo | null;
  isLoading: boolean;
  error: string | null;
  setOrg: () => Promise<void>;
}

const useOrgStore = create<OrgState>()(
  persist(
    (set) => ({
      orgInfo: null,
      isLoading: false,
      error: null,
      setOrg: async () => {
        set({ isLoading: true, error: null });

        for (let i = 0; i < 3; i++) {
          try {
            const response = await client.getOrg();
            set({
              orgInfo: response.data?.data,
              isLoading: false,
              error: null,
            });
            return;
          } catch (error) {
            console.error(
              `API attempt ${i + 1} failed:`,
              JSON.stringify(error, null, 2)
            );
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
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useOrgStore;
export type OrgContext = OrgState;
