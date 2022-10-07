import { createContext } from "react";

interface ContextProps {
  isOn: boolean;
}
export const StateContext = createContext({} as ContextProps);
