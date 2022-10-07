import React, { FC, useReducer, ReactNode } from "react";
import { StateContext } from "./StateContext";
import { stateReducer } from "./stateReducer";

export interface State {
  power: boolean;
  lastPlayedSound: string;
}

const STATE_INITIAL_STATE: State = {
  power: true,
  lastPlayedSound: "Heater 1",
};

interface Props {
  children: ReactNode;
}

const StateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, STATE_INITIAL_STATE);

  const togglePower = () => {
    dispatch({
      type: "State - Toggle On/Off",
    });
  };

  const setLastPlayedSound = (sound: string) => {
    dispatch({
      type: "State - SetLastPlayedSound",
      payload: sound,
    });
  };

  return (
    <StateContext.Provider
      value={{
        ...state,

        // methods:
        togglePower,
        setLastPlayedSound,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
