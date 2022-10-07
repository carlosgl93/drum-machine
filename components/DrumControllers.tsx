// React & dependencies
import { Box } from "@mui/material";
import { FC } from "react";
import PowerSwitch from "./PowerSwitch";
import SoundInfo from "./SoundInfo";
import VolumeSlider from "./VolumeSlider";

// Material Components

// My components

// Queries & Mutations

// Typescript
interface Props {}
const DrumControllers: FC<Props> = ({}) => {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center'>
      <Box>
        {/* PowerSwitch*/}
        <PowerSwitch />
        {/* SoundInfo Component */}
        <SoundInfo />
        {/* Volume Slider */}
        <VolumeSlider />
      </Box>
    </Box>
  );
};
export default DrumControllers;
