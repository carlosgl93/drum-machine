import { State } from "./";

type StateActionType = {
  type: "State - Toggle On/Off";
};

export const stateReducer = (state: State, action: StateActionType): State => {
  switch (action.type) {
    case "State - Toggle On/Off":
      return { ...state };
    default:
      return state;
  }
};
