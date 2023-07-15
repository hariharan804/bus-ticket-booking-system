import { apiCall } from "@/helpers/api";
import { AuthProps, userDetailsProps } from "@/types/authProps";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist<AuthProps>(
    (set, get) => ({
      isAuth: false,
      userDetails: {
        id:'',
        name: "",
        email: "",
        password: "",
        dob: "",
        role: "user",
      },
      setUserDetails: (details: userDetailsProps) => {
        set({ userDetails: { ...details, role: "user" }, isAuth: true });
      },
      setAuth: (auth: boolean) => {
        set({ isAuth: auth });
      },
      userLogin: ({ email, password }: { email: string; password: string }) => {
        console.log("🚀 ~ file: authStore.ts:24 ~  email, password:", {
          email,
          password,
        });
        const user = get().userList;
        const loggedUser: userDetailsProps =
          user.find(
            (val) => val?.email === email && val?.password === password
          ) || {};
        set({ userDetails: { ...loggedUser }, isAuth: true });
        return loggedUser;
      },
      userList: [
        {
          id:2,
          name: "Demo User",
          email: "demouser@mail.com",
          password: "user@123",
          dob: "03/03/2000",
          role: "user",
        },
        {
          id:1,
          name: "Admin",
          email: "admin@mail.com",
          password: "admin@123",
          dob: "05/05/2000",
          role: "admin",
        },
      ],
    }),
    {
      name: "auth", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
