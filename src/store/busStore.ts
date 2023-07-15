import { busDetailsInterface, busDetailsProps } from "@/types/busProps";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBusStore = create(
  persist<busDetailsInterface>(
    (set, get) => ({
      busDetailsList: [
        {
          id: 1,
          designation: "Chennai to Madurai",
          drop_address: "Madurai Bus Stand",
          pickup_address: "CMPT Bus Stand",
          base_fare: 600,
          travel_hours: "8h 30m",
          bus_name: "RVS Bus Service",
          bus_no: "TN 20 BN 1020",
          bus_contact: "8887657556",
          travel_date: "23/03/23",
        },
        {
          id: 2,
          designation: "Madurai to Chennai",
          drop_address: "CMPT Bus Stand(Last stop)",
          pickup_address: "Madurai Bus Stand",
          base_fare: 600,
          travel_hours: "8h 30m",
          bus_name: "RVS Bus Service",
          bus_no: "TN 20 BN 1020",
          bus_contact: "8887657556",
          travel_date: "23/03/23",
        },
      ],
     
      updateBusDetails: (busDetails: busDetailsProps) => {
        console.log(busDetails);
        const oldData = get().busDetailsList;
        set({ busDetailsList: [...oldData, busDetails] });
      },
    }),
    {
      name: "busDetails", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
