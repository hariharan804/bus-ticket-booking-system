export interface TicketProps {
  traveler_name: string;
  gender: string;
  place: string;
  time: string;
  drop_place: string;
  hours: string;
  email: string;
  mobile: number |  string;
  base_fare: string;
  updateTicketStore: (data: object) => void;
}
