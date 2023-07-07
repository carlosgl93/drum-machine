// React & dependencies
import { FC, useContext, useState } from "react";

// Material Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { StateContext } from "../context";
// import { VolumeDown, VolumeUp } from "@mui/icons-material";
// My components

// Queries & Mutations

// Typescript
interface Props {}
const VolumeSlider: FC<Props> = ({}) => {
  const { volume, setVolume } = useContext(StateContext);

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setVolume(Number(value));
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Slider
        aria-label="Volume"
        value={volume}
        onChange={handleChange}
        min={0}
        max={100}
        sx={{
          maxWidth: "50%",
        }}
      />
    </Box>
  );
};
export default VolumeSlider;
