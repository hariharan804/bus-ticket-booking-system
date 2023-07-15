export type bookingListProps = {
  id?: string | number;
  traveler_name?: string;
  gender?: string;
  user_id?: string | number;
  place?: {
    id?: number,
    designation?: string,
    drop_address?: string,
    pickup_address?: string,
    base_fare?: number,
    travel_hours?: string,
    bus_name?: string,
    bus_no?: string,
    bus_contact?: string,
  };
  travel_time?:string,
  payment?: string,
  email?: string;
  mobile?: number |  string;
}
export interface TicketProps {
  id?: string | number;
  traveler_name: string;
  gender: string;
  user_id?: string;
  place: {
    id: number,
    designation: string,
    drop_address: string,
    pickup_address: string,
    base_fare: number,
    travel_hours: string,
    bus_name: string,
    bus_no: string,
    bus_contact: string,
  };
  email: string;
  travel_time?: string;
  mobile: number |  string;
  updateTicketStore: (data: object) => void;
  getAllTickets: () => void;
  bookedList: bookingListProps[]
  updateTicketList:(bookingData: bookingListProps)=> void;
}
