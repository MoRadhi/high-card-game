import "./App.css";
import { makeShuffledDeck } from "./utils.jsx";
import { useState } from "react";
import CardDealer from "./Components/CardDealer.jsx";
import PlayingCard from "./Components/PlayingCard.jsx";
import ScoreBoard from "./Components/ScoreBoard.jsx";

function App(props) {
  // Set default value of card deck to new shuffled deck
  const [cardDeck, setCardDeck] = useState(makeShuffledDeck());
  const [gameState, setGameState] = useState("Deal Cards To Start The Game");
  const [gameEnded, setGameEnded] = useState(false);
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", score: 0, wins: 0, currentCard: null },
    { id: 2, name: "Player 2", score: 0, wins: 0, currentCard: null },
    { id: 3, name: "Player 3", score: 0, wins: 0, currentCard: null },
    { id: 4, name: "Player 4", score: 0, wins: 0, currentCard: null },
  ]);

  //Assign each player a card
  const dealCards = () => {
    if (cardDeck.length < players.length) {
      //Find the top score
      const topScore = Math.max(...players.map((p) => p.score));

      //Find all players who reached that score
      const winners = players.filter((p) => p.score === topScore);

      //Update the wins
      setPlayers((prev) =>
        prev.map((player) =>
          player.score === topScore
            ? { ...player, wins: player.wins + 1 }
            : player,
        ),
      );

      //If theres 2 winners its a draw
      if (winners.length > 1) {
        setGameState(
          `Game Over! It's a Draw between ${winners.map((w) => w.name).join(" & ")}`,
        );
      } else {
        setGameState(`Game Over! ${winners[0].name} Won the Game!`);
      }
      setGameEnded(true);
      return;
    }

    const newDeck = [...cardDeck];
    const updatedPlayers = players.map((player) => ({
      ...player,
      currentCard: newDeck.pop(),
    }));

    //Check winner of the round
    const maxRank = Math.max(
      ...updatedPlayers.map((player) => player.currentCard.rank),
    );
    const roundWinners = updatedPlayers.filter(
      (player) => player.currentCard.rank === maxRank,
    );

    //Increase the round score of the player if he has max card
    setPlayers(
      updatedPlayers.map((player) =>
        player.currentCard.rank === maxRank
          ? { ...player, score: player.score + 1 }
          : player,
      ),
    );

    //Update states
    setCardDeck(newDeck);
    //If theres more than 1 player in the winners array its a tie else he won the round
    setGameState(
      roundWinners.length > 1
        ? "It's A Tie"
        : `${roundWinners[0].name} Won The Round`,
    );
  };

  const playAgain = () => {
    setCardDeck(makeShuffledDeck());
    setPlayers((prev) =>
      prev.map((p) => ({ ...p, score: 0, currentCard: null })),
    );
    setGameEnded(false);
    setGameState("New Game Started!");
  };

  return (
    <>
      <div className="card">
        <h2>React High Card Game🚀</h2>
        <PlayingCard players={players} />
        <br />
        <CardDealer
          dealCards={dealCards}
          playAgain={playAgain}
          deckCount={cardDeck.length}
          playerCount={players.length}
          gameState={gameState}
          gameEnded={gameEnded}
        />
        <br />
        <ScoreBoard players={players} />
      </div>
    </>
  );
}

export default App;
