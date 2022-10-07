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

  const handleClick = (event: MouseEvent) => {
    // implement playing audio on click
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
      <Button>{keyToPress}</Button>
    </Grid>
  );
};
export default DrumPad;
