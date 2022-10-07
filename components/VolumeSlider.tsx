// React & dependencies
import { FC, useState } from "react";

// Material Components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
// import { VolumeDown, VolumeUp } from "@mui/icons-material";
// My components

// Queries & Mutations

// Typescript
interface Props {}
const VolumeSlider: FC<Props> = ({}) => {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        {/* <VolumeDown /> */}
        <Slider aria-label='Volume' value={value} onChange={handleChange} />
        {/* <VolumeUp /> */}
      </Stack>
    </Box>
  );
};
export default VolumeSlider;
