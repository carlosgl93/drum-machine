// React & dependencies
import { Box } from "@mui/material";
import { FC } from "react";
import PowerSwitch from "./PowerSwitch";
import SoundInfo from "./SoundInfo";
import VolumeSlider from "./VolumeSlider";

interface Props {}
const DrumControllers: FC<Props> = ({}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      {/* PowerSwitch*/}
      <PowerSwitch />
      {/* SoundInfo Component */}
      {/* Volume Slider */}
      <VolumeSlider />
    </Box>
  );
};
export default DrumControllers;
