import { State } from "./";

type StateActionType =
  | {
      type: "State - Toggle On/Off";
    }
  | { type: "State - SetLastPlayedSound"; payload: string };

export const stateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - Toggle On/Off":
      return { ...state, power: !state.power };
    case "State - SetLastPlayedSound":
      return { ...state, lastPlayedSound: action.payload };
    default:
      return state;
  }
};
