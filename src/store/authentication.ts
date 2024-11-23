import { AuthenticationStoreType } from "@/types/authentication";
import { create } from "zustand";

export const useAuthenticationStore = create<AuthenticationStoreType>(
  (set) => ({
    loading: true,
    userName: "",
    userId: "",
    setLoading: (value: boolean) =>
      set((state) => ({ ...state, loading: value })),
    setAuthentication: ({
      userName,
      userId,
    }: {
      userName: string;
      userId: string;
    }) => set((state) => ({ ...state, userName, userId })),
  })
);
