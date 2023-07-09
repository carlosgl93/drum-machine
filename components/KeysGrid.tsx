// React & dependencies
import { FC, useContext, useEffect, useState } from "react";

// Material Components
import { Box, Grid } from "@mui/material";

// My components
import DrumPad from "./DrumPad";
import drums from "../assets/drums";
import { StateContext } from "../context";

interface Props {}

const KeysGrid: FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        component="section"
        container
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
        spacing={1}
      >
        {drums.map((d) => {
          return <DrumPad key={d.id} drum={d} />;
        })}
      </Grid>
    </Box>
  );
};
export default KeysGrid;
