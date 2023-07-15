import { apiCall } from "@/helpers/api";
import { AuthProps, userDetailsProps } from "@/types/authProps";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist<AuthProps>(
    (set, get) => ({
      isAuth: false,
      userDetails: {
        id: "",
        name: "",
        email: "",
        password: "",
        dob: "",
        role: "user",
      },
      setUserDetails: async (details: userDetailsProps) => {
        try {
          const user = await apiCall("POST", "/auth/create_account", {
            ...details,
            role: "user",
          });
          console.log(
            "🚀 ~ file: authStore.ts:20 ~ setUserDetails: ~ user:",
            user
          );
          if (user?.data?.length > 0) {
            set({
              userDetails: { ...user?.data[0] },
              isAuth: true,
            });
          } else {
            set({
              userDetails: { ...details, role: "user" },
              isAuth: true,
            });
          }
        } catch (error) {
          console.log(
            "🚀 ~ file: authStore.ts:46 ~ setUserDetails: ~ error:",
            error
          );
        }
      },
      setAuth: (auth: boolean) => {
        set({ isAuth: auth });
      },
      userLogin: ({ email, password }: { email: string; password: string }) => {
        const user = get().userList;
        const loggedUser: userDetailsProps =
          user.find(
            (val) => val?.email === email && val?.password === password
          ) || {};
        set({ userDetails: { ...loggedUser }, isAuth: true });
        return loggedUser;
      },
      deleteUsers: async (id: string | number) => {
        const res = await apiCall("POST", "/auth/deleteUser", { id });
        if (res?.data > 0) {
          get().getAllUsers();
          toast.success('Deleted Successfully')
        }
      },
      getAllUsers: async () => {
        try {
          const res = await apiCall("GET", "/auth/getAllUser");
          if (res?.data?.length > 0) {
            set({ userList: [...res?.data] });
          }
        } catch (error) {
          console.log(
            "🚀 ~ file: authStore.ts:46 ~ getAllUsers: ~ error:",
            error
          );
        }
      },

      userList: [
        {
          id: 2,
          name: "Demo User",
          email: "demouser@mail.com",
          password: "user@123",
          dob: "03/03/2000",
          role: "user",
        },
        {
          id: 1,
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
