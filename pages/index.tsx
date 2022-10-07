import { Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import DrumPad from "../components/DrumPad";

import drums from "../assets/drums";

const Home: NextPage = () => {
  return (
    <div>
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
      >
        <Grid container id='display'>
          {drums.map((d) => {
            return (
              <DrumPad id={d.id} keyToPress={d.keyToPress} audio={d.audio} />
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
