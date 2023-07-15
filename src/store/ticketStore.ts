import { apiCall } from "@/helpers/api";
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
        designation: "",
        drop_address: "",
        pickup_address: "",
        base_fare: 0,
        travel_hours: "",
        bus_name: "",
        bus_no: "",
        bus_contact: "",
      },
      email: "",
      travel_time: "",
      mobile: "",
      // base_fare: "",
      bookedList: [],
      updateTicketStore: (data: object) => {
        const oldData = get();
        set({ ...oldData, ...data });
      },
      updateTicketList: async (bookingData: bookingListProps) => {
        console.log(bookingData);
        const res = await apiCall("POST", "/ticket/book_ticket", {
          traveler_name: bookingData?.traveler_name,
          gender: bookingData?.gender,
          user_id: bookingData?.user_id,
          bus_id: bookingData?.place?.id,
          designation: bookingData?.place?.designation,
          drop_address: bookingData?.place?.drop_address,
          pickup_address: bookingData?.place?.pickup_address,
          base_fare: bookingData?.place?.base_fare,
          travel_hours: bookingData?.place?.travel_hours,
          bus_name: bookingData?.place?.bus_name,
          bus_no: bookingData?.place?.bus_no,
          bus_contact: bookingData?.place?.bus_contact,
          travel_time: bookingData?.travel_time,
          payment: bookingData?.payment,
          email: bookingData?.email,
          mobile: bookingData?.mobile,
        });

        if (res?.data?.length > 0) {
          set({ bookedList: [...res?.data] });
        } else {
          const oldData = get().bookedList;
          set({ bookedList: [...oldData, bookingData] });
        }
      },
      getAllTickets: async () => {
        try {
          const res = await apiCall("GET", "/ticket/getAllTickets");
          if (res?.data?.length > 0) {
            const newData = res?.data?.map((val)=>{
              return {
                id:val?.id,
                traveler_name: val?.traveler_name,
                gender: val?.gender,
                user_id: val?.user_id,
                place: {
                  id: val?.bus_id,
                  designation: val?.designation,
                  drop_address: val?.drop_address,
                  pickup_address: val?.pickup_address,
                  base_fare: val?.base_fare,
                  travel_hours: val.travel_hours,
                  bus_name: val?.bus_name,
                  bus_no: val?.bus_no,
                  bus_contact: val?.bus_contact,
                },
                email:val?.email,
                travel_time: val?.travel_time,
                mobile: val?.mobile,
                payment: val?.payment,
              }
            })
            set({ bookedList: [...newData] });
          }
        } catch (error) {
          console.log(
            "🚀 ~ file: authStore.ts:46 ~ getAllUsers: ~ error:",
            error
          );
        }
      },
    }),
    {
      name: "ticket", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
