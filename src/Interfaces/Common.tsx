import { ReactNode } from "react";

export interface UserProps {
  fullName: string;
  address: string;
  contact: number;
  age: number;
  id: number;
}

export interface ContextDataProps {
  data: UserProps[];
  setData: React.Dispatch<React.SetStateAction<UserProps[]>>;
}

export interface ContextProviderProps {
  children: ReactNode;
}
