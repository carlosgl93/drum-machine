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
        sx={{}}
      >
        <KeysGrid />
        <DrumControllers />
      </Box>
    </Box>
  );
};

export default Home;
