// React & dependencies
import { Button, Grid } from "@mui/material";
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
  const handleKeyDown = (event: KeyboardEvent) => {
    console.log({ event });
    if (event.key === keyToPress) {
      // play the corresponding audio
    }
  };

  const handleClick = (event: any, keyToPress: string) => {
    // implement playing audio on click
    console.log({ keyToPress });
    console.log({ event });

    return { bla: "bla" };
  };

  return (
    <Grid
      item
      xs={4}
      id={id}
      className='drum-pad'
      onKeyDown={() => handleKeyDown}
      onClick={() => handleClick}
    >
      <Button onClick={(e) => handleClick(e, keyToPress)}>{keyToPress}</Button>
    </Grid>
  );
};
export default DrumPad;
