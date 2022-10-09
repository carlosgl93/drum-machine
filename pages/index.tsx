import type { NextPage } from "next";
import Head from "next/head";

// Material UI
import { Box, Grid, useTheme } from "@mui/material";

import KeysGrid from "../components/KeysGrid";
import DrumControllers from "../components/DrumControllers";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "97vh",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Head>
        <title>Drum Machine by CGL</title>
        <meta name='description' content="CGL's Drum machine" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        component='main'
        id='drum-machine'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          height: "100vh",
        }}
      >
        <Box
          display='flex'
          flexDirection='row'
          sx={{
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
    </Box>
  );
};

export default Home;
