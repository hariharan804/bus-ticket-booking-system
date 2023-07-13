import { apiCall } from "@/helpers/api";
import { userDetailsProps } from "@/types/authProps";
import { TicketProps, bookingListProps } from "@/types/ticketProps";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTicketStore = create(
  persist<TicketProps>(
    (set, get) => ({
      traveler_name: "",
      gender: "",
      place: {
        id: 0,
        label: "",
        drop_address: "",
        pickup_address: "",
        base_fare: 0,
        travel_hours: "",
        bus_name: "",
        bus_no: "",
        bus_contact: "",
      },
      email: "",
      mobile: "",
      // base_fare: "",
      bookedList: [],
      updateTicketStore: (data: object) => {
        const oldData = get();
        set({ ...oldData, ...data });
      },
      updateTicketList: (bookingData: bookingListProps) => {
        console.log(bookingData);
        const oldData = get().bookedList;
        set({ bookedList: [...oldData, bookingData] });
      },
    }),
    {
      name: "ticket", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
