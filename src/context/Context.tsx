import React, { createContext, useState } from "react";
import {
  ContextDataProps,
  ContextProviderProps,
  UserProps,
} from "../Interfaces/Common";

export const ContextData = createContext<ContextDataProps | undefined>(
  undefined
);

export const Context: React.FC<ContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<UserProps[]>([]);

  return (
    <ContextData.Provider value={{ data, setData }}>
      {children}
    </ContextData.Provider>
  );
};
