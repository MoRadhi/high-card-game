const PlayingCard = ({ players }) => {
  return (
    <>
      <div className="card-container">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <h4>{player.name} Card:</h4>
            {player.currentCard ? (
              <p>
                {player.currentCard.name} of {player.currentCard.suit}
              </p>
            ) : (
              <p>No card dealt yet</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayingCard;
