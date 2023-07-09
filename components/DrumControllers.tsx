// React & dependencies
import { Box } from "@mui/material";
import { FC, useContext } from "react";
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
      <PowerSwitch />
      <SoundInfo />

      <VolumeSlider />
    </Box>
  );
};
export default DrumControllers;
