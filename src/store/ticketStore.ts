import { apiCall } from "@/helpers/api";
import { userDetailsProps } from "@/types/authProps";
import { TicketProps } from "@/types/ticketProps";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTicketStore = create(
  persist<TicketProps>(
    (set, get) => ({
      traveler_name: "",
      gender: "",
      place: "",
      time: "",
      drop_place: "",
      hours: "",
      email: "",
      mobile: "",
      base_fare: "",
      //  card_number:'',
      //  card_holder_name:'',
      //  expir

      updateTicketStore: (data: object) => {
        console.log("🚀 ~ file: ticketStore.ts:24 ~ data:", data);
        const oldData = get();
        console.log("🚀 ~ file: ticketStore.ts:26 ~ oldData:", oldData)
        set({ ...oldData, ...data });
      },
    }),
    {
      name: "ticket", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
