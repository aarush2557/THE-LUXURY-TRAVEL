import { createContext, useState, useEffect } from "react";
import { getDestinations } from "../api/api";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDestinations().then(setData);
  }, []);

  return (
    <TravelContext.Provider value={{ data }}>
      {children}
    </TravelContext.Provider>
  );
};