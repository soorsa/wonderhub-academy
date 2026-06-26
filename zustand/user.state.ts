import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserState = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      token: "",

      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token: token }),

      reset: () =>
        set({
          user: null,
          isLoggedIn: false,
          token: "",
        }),
    }),
    {
      name: "user-state",
    }
  )
);
