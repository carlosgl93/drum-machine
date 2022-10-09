// React & dependencies
import { FC } from "react";

// Material Components
import { Grid, useTheme } from "@mui/material";

// My components
import DrumPad from "./DrumPad";
import drums from "../assets/drums";

// Queries & Mutations

// Typescript
interface Props {}

const KeysGrid: FC<Props> = ({}) => {
  const theme = useTheme();

  return (
    <Grid
      component='section'
      container
      id='display'
      sx={{
        width: "50vw",
        textAlign: "center",
        position: "relative",
      }}
      spacing={1}
    >
      {drums.map((d) => {
        return (
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "7px",
            }}
            key={d.id + d.keyToPress}
          >
            <DrumPad id={d.id} keyToPress={d.keyToPress} audio={d.audio} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default KeysGrid;
