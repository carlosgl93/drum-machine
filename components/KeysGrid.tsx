// React & dependencies
import { FC, useContext, useEffect, useState } from "react";

// Material Components
import { Box, Grid } from "@mui/material";

// My components
import DrumPad from "./DrumPad";
import drums from "../assets/drums";
import { StateContext } from "../context";

// Queries & Mutations

// Typescript
interface Props {}

const KeysGrid: FC<Props> = ({}) => {
  const { lastPlayedSound } = useContext(StateContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        id="display"
      >
        <h3>{lastPlayedSound}</h3>
      </Box>
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
