const CardDealer = ({
  dealCards,
  playAgain,
  deckCount,
  playerCount,
  gameState,
  gameEnded,
}) => {
  return (
    <div className="dealer-container">
      <h2>{gameState}</h2>

      <div className="button-group">
        {/* Only show Play Again if the game is officially ended */}
        {!gameEnded ? (
          <button onClick={dealCards} className="btn btn-primary">
            {deckCount < playerCount
              ? "Finish Game & See Winner"
              : `Deal Cards (${deckCount} left)`}
          </button>
        ) : (
          <button onClick={playAgain} className="btn btn-success">
            Play Again
          </button>
        )}
      </div>

      <p>Playing with {playerCount} players</p>
    </div>
  );
};

export default CardDealer;
