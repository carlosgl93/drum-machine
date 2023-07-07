import { FC, useCallback, useContext, useEffect } from "react";
import { Button, Grid, useTheme } from "@mui/material";
import { StateContext } from "../context";

interface Props {
  drum: {
    audio: string;
    id: string;
    keyToPress: string;
  };
}

const DrumPad: FC<Props> = ({ drum }) => {
  const { audio, id, keyToPress } = drum;
  const { power, setLastPlayedSound, volume } = useContext(StateContext);

  useEffect(() => {
    document.addEventListener("keydown", keyListenerHandler);

    return () => {
      document.removeEventListener("keydown", keyListenerHandler);
    };
  }, []);

  const theme = useTheme();

  const keyListenerHandler = async (e: KeyboardEvent) => {
    const player = document.getElementById(
      e.key.toUpperCase()
    ) as HTMLAudioElement;
    console.log(player);
    if (player) {
      player.volume = volume / 100;
      player!.play();
      setLastPlayedSound(player.id);
    }
  };

  const handleClick = useCallback((event: any) => {
    const target = event.target.children[0];
    target.play();
    setLastPlayedSound(target.id);
  }, []);

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
      className="drum-pad"
      id={id}
    >
      <Button
        onClick={(e) => handleClick(e)}
        sx={{
          color: theme.palette.secondary.main,
          backgroundColor: power
            ? theme.palette.background.default
            : theme.palette.background.paper,
          height: { xs: "2rem", sm: "5rem" },
          width: { xs: "2rem", sm: "5rem" },
        }}
        disabled={!power}
      >
        {keyToPress}
        <audio src={audio} className="clip" id={keyToPress} />
      </Button>
    </Grid>
  );
};
export default DrumPad;
