import React, { FC, useReducer, ReactNode } from "react";
import { StateContext } from "./StateContext";
import { stateReducer } from "./stateReducer";

export interface State {
  isOn: boolean;
}

const State_INITIAL_STATE: State = {
  isOn: false,
};

interface Props {
  children: ReactNode;
}

const StateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, State_INITIAL_STATE);

  return (
    <StateContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
