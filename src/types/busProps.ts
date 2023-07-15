export type busDetailsProps = {
  id: number |  string,
  designation: string,
  drop_address: string,
  pickup_address: string,
  base_fare: number,
  travel_hours:string,
  bus_name:string,
  bus_no: string,
  bus_contact: string,
  travel_time:string,
}
export interface busDetailsInterface {
  busDetailsList: busDetailsProps[]
  updateBusDetails:(bookingData: busDetailsProps)=> void;
}
