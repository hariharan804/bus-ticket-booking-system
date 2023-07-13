export type bookingListProps = {
  id:string,
  traveler_name?: string;
  gender?: string;
  place?: {
    id?: number,
    label?: string,
    drop_address?: string,
    pickup_address?: string,
    base_fare?: number,
    travel_hours?: string,
    bus_name?: string,
    bus_no?: string,
    bus_contact?: string,
  };
  payment?: string,
  email?: string;
  mobile?: number |  string;
}
export interface TicketProps {
  traveler_name: string;
  gender: string;
  place: {
    id: number,
    label: string,
    drop_address: string,
    pickup_address: string,
    base_fare: number,
    travel_hours: string,
    bus_name: string,
    bus_no: string,
    bus_contact: string,
  };
  email: string;
  mobile: number |  string;
  updateTicketStore: (data: object) => void;
  bookedList: bookingListProps[]
  updateTicketList:(bookingData: bookingListProps)=> void;
}
