export type userDetailsProps = {
  name?: string;
  email?: string;
  password?: string;
  dob?: string;
  role?: "user" | "admin";
};
export interface AuthProps {
  isAuth: boolean;
  userDetails: userDetailsProps;
  userList: userDetailsProps[];
  setUserDetails: (details: userDetailsProps) => void;
  setAuth: (auth: boolean) => void;
  userLogin: ({ email, password }: { email: string; password: string }) => userDetailsProps;
}
