import { Box, Paper, Typography, Grid, Zoom } from "@mui/material";

const PlayingCard = ({ players }) => {
  const suitStyles = {
    Diamonds: { color: "#b388ff", symbol: "♦" },
    Hearts: { color: "#a162ff", symbol: "♥" },
    Clubs: { color: "#ffeb3b", symbol: "♣" },
    Spades: { color: "#fff59d", symbol: "♠" },
  };

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
      {players.map((p) => {
        const style = p.currentCard
          ? suitStyles[p.currentCard.suit]
          : { color: "#333", symbol: "" };

        return (
          <Grid item key={p.id}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                mb: 1.5,
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              {p.name}
            </Typography>

            {/* Zoom adds a nice "pop-in" effect when the card is dealt */}
            <Zoom in={!!p.currentCard} key={p.currentCard?.name || "empty"}>
              <Paper
                elevation={24}
                sx={{
                  width: 150,
                  height: 210,
                  backgroundColor: "#1a0b2e",
                  borderRadius: 3,
                  position: "relative",
                  border: `2px solid ${p.currentCard ? style.color : "#2d1b4d"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {p.currentCard ? (
                  <>
                    {/* Top Right Corner */}
                    <Typography
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 12,
                        color: style.color,
                        fontWeight: 900,
                        fontSize: "1.2rem",
                      }}
                    >
                      {p.currentCard.name[0]}
                    </Typography>

                    {/* Center Suit Icon */}
                    <Box
                      sx={{
                        fontSize: "4rem",
                        color: style.color,
                        filter: `drop-shadow(0 0 10px ${style.color}66)`,
                      }}
                    >
                      {style.symbol}
                    </Box>

                    {/* Bottom Left Corner (Upside Down) */}
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 12,
                        color: style.color,
                        fontWeight: 900,
                        fontSize: "1.2rem",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {p.currentCard.name[0]}
                    </Typography>
                  </>
                ) : (
                  <Box
                    sx={{
                      width: "80%",
                      height: "80%",
                      border: "1px dashed #2d1b4d",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Paper>
            </Zoom>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PlayingCard;
