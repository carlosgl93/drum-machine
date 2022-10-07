// React & dependencies
import { FC, useContext } from "react";

// Material Components
import { Box, Switch, Typography } from "@mui/material";

// My components
import { StateContext } from "../context";

// Queries & Mutations

// Typescript
interface Props {}
const PowerSwitch: FC<Props> = ({}) => {
  const { power, togglePower } = useContext(StateContext);

  const handleChange = () => {
    return togglePower();
  };

  return (
    <Box>
      <Typography variant='h6'>Power</Typography>
      <Switch checked={power} onChange={handleChange} />
    </Box>
  );
};
export default PowerSwitch;
