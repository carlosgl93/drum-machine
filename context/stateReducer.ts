import { State } from "./";

type StateActionType =
  | {
      type: "State - Toggle On/Off";
    }
  | { type: "State - SetLastPlayedSound"; payload: string }
  | { type: "State - SetVolume"; payload: number };

export const stateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - Toggle On/Off":
      return { ...state, power: !state.power };
    case "State - SetLastPlayedSound":
      return { ...state, lastPlayedSound: action.payload };
    case "State - SetVolume":
      return { ...state, volume: action.payload };
    default:
      return state;
  }
};
