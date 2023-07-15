import { apiCall } from "@/helpers/api";
import { busDetailsInterface, busDetailsProps } from "@/types/busProps";
import { toast } from "react-hot-toast";
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
          pickup_address: "Koyambed Bus Stand",
          base_fare: 600,
          travel_hours: "8h 30m",
          bus_name: "RVS Bus Service",
          bus_no: "TN 20 BN 1020",
          bus_contact: "8887657556",
          travel_time: "23/03/23",
        },
        {
          id: 2,
          designation: "Madurai to Chennai",
          drop_address: "Koyambed Bus Stand(Last stop)",
          pickup_address: "Madurai Bus Stand",
          base_fare: 600,
          travel_hours: "8h 30m",
          bus_name: "RVS Bus Service",
          bus_no: "TN 20 BN 1020",
          bus_contact: "8887657556",
          travel_time: "23/03/23",
        },
      ],
      getAllBus: async () => {
        const res = await apiCall("GET", "/ticket/getAllBus");
        console.log("🚀 ~ file: busStore.ts:37 ~ getAllBus: ~ res:", res)
        if (res?.data?.length > 0) {
          set({ busDetailsList: [...res?.data] });
        }
      },
      updateBusDetails: async (busDetails: busDetailsProps) => {
        console.log(busDetails);
        const res = await apiCall("POST", "/ticket/addBus", {...busDetails});
        if (res?.data?.length > 0) {
           get().getAllBus();
        } else {
          const oldData = get().busDetailsList;
          set({ busDetailsList: [...oldData, busDetails] });
        }
        toast.success('Bus Details added successfully!')
      },
    }),
    {
      name: "busDetails", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
