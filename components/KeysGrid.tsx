// React & dependencies
import { FC } from "react";

// Material Components
import { Grid } from "@mui/material";

// My components
import DrumPad from "./DrumPad";
import drums from "../assets/drums";

// Queries & Mutations

// Typescript
interface Props {}

const KeysGrid: FC<Props> = ({}) => {
  return (
    <Grid
      container
      id='display'
      sx={{
        width: "100%",
        mt: "33vh",
        mx: "25vw",
      }}
    >
      {drums.map((d) => {
        return (
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
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
