import { createContext } from "react";

interface ContextProps {
  power: boolean;
  lastPlayedSound: string;
  // methods
  togglePower: () => void;
  setLastPlayedSound: (sound: string) => void;
}
export const StateContext = createContext({} as ContextProps);
