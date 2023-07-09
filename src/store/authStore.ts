import { apiCall } from "@/helpers/api";
import { AuthProps, userDetailsProps } from "@/types/authProps";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist<AuthProps>(
    (set, get) => ({
      isAuth: false,
      userDetails: {
        name: "",
        email: "",
        password: "",
        dob: "",
        role:'user'
      },
      setUserDetails: (details: userDetailsProps) => {
        set({ userDetails: { ...details, role:'user' }, isAuth: true });
      },
      setAuth: (auth: boolean) => {
        set({ isAuth: auth });
      },
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
