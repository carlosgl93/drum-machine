import type { NextPage } from "next";
import Head from "next/head";

import { Box, useTheme } from "@mui/material";

import KeysGrid from "../components/KeysGrid";
import DrumControllers from "../components/DrumControllers";

const Home: NextPage = () => {
  const theme = useTheme();

  // const [power, setPower] = useState<boolean>(true);
  // const [lastSoundPlayed, setLastSoundPlayed] = useState("");

  return (
    <>
      <Head>
        <title>Drum Machine by CGL</title>
        <meta name="description" content="CGL's Drum machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="main"
        id="drum-machine"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            border: `2px solid ${theme.palette.secondary.main}`,
            borderRadius: "4px",
            backgroundColor: theme.palette.background.paper,
            p: "5vh 5vw",
          }}
        >
          <KeysGrid />
          <DrumControllers />
        </Box>
      </Box>
    </>
  );
};

export default Home;
