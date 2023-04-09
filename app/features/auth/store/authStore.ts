import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  userId: string;
  email: string;
  token: string;
  actions: {
    login: (email: string, password: string) => void;
    logout: () => void;
    resetState: () => void;
  };
};

const useAuthStore = create<Store>()(
  immer(
    devtools((set) => ({
      userId: "",
      email: "",
      token: "",

      actions: {
        login: (email, password) => {
          set((state) => {
            state.userId = "test-01";
            state.email = email;
            state.token = "12345";
          });
        },

        logout: () => {
          set((state) => {
            state.userId = "";
            state.email = "";
            state.token = "";
          });
        },

        resetState: () => {
          set(() => ({
            userId: "",
            email: "",
            token: "",
          }));
        },
      },
    }))
  )
);

export const getAuthStore = () => useAuthStore.getState();
export const useAuthStoreEmail = () => useAuthStore((state) => state.email);
export const useAuthStoreToken = () => useAuthStore((state) => state.token);
export const useAuthStoreActions = () => useAuthStore((state) => state.actions);
