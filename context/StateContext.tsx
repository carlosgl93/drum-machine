import { createContext } from "react";

interface ContextProps {
  power: boolean;
  lastPlayedSound: string;
  volume: number;
  // methods
  togglePower: () => void;
  setLastPlayedSound: (sound: string) => void;
  setVolume: (volume: number) => void;
}
export const StateContext = createContext({} as ContextProps);
