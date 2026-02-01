import { Box, Button, Typography, Chip } from "@mui/material";

const CardDealer = ({
  dealCards,
  playAgain,
  deckCount,
  playerCount,
  gameState,
  gameEnded,
}) => {
  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", letterSpacing: 1 }}
      >
        {gameState.toUpperCase()}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 2 }}>
        {!gameEnded ? (
          <Button
            variant="contained"
            size="large"
            onClick={dealCards}
            color="primary"
            sx={{ px: 4 }}
          >
            {deckCount < playerCount ? "FINISH GAME" : `DEAL (${deckCount})`}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={playAgain}
            color="secondary"
            sx={{ px: 4 }}
          >
            PLAY AGAIN
          </Button>
        )}
      </Box>

      <Chip
        label={`Active Players: ${playerCount}`}
        variant="outlined"
        sx={{ color: "grey.500" }}
      />
    </Box>
  );
};

export default CardDealer;
