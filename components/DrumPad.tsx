// React & dependencies
import { Button, Grid, useTheme } from "@mui/material";
import { FC } from "react";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {
  id: string;
  keyToPress: string;
  audio: string;
}

const DrumPad: FC<Props> = ({ id, keyToPress, audio }) => {
  const theme = useTheme();

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log({ event });
    if (event.key === keyToPress) {
      // play the corresponding audio
      // AND setState last keyPressed
    }
  };

  const handleClick = (event: any, keyToPress: string) => {
    // implement playing audio on click
    console.log({ keyToPress });
    console.log({ event });

    return { bla: "bla" };
  };

  return (
    <Button
      onClick={(e) => handleClick(e, keyToPress)}
      sx={{
        m: "1vh 1vw",
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.background.default,
        height: "7vh",
        width: "8vw",
      }}
    >
      {keyToPress}
    </Button>
  );
};
export default DrumPad;
