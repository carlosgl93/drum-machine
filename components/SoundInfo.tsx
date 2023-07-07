// React & dependencies
import { FC, useContext } from "react";

// Material Components
import { Box, Typography } from "@mui/material";
import { StateContext } from "../context";

// My components

// Queries & Mutations

// Typescript
interface Props {}

const SoundInfo: FC<Props> = ({}) => {
  const { lastPlayedSound } = useContext(StateContext);

  return (
    <Box>
      <Typography>{lastPlayedSound}</Typography>
    </Box>
  );
};
export default SoundInfo;
