// React & dependencies
import { FC, useContext } from "react";

import { Box, Typography } from "@mui/material";
import { StateContext } from "../context";

interface Props {}

const SoundInfo: FC<Props> = ({}) => {
  const { lastPlayedSound } = useContext(StateContext);

  return (
    <Box>
      <Typography variant="h6" id="display">
        {lastPlayedSound ? lastPlayedSound : "Play!"}
      </Typography>
    </Box>
  );
};
export default SoundInfo;
