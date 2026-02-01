import "./App.css";
import { makeShuffledDeck } from "./utils.jsx";
import { useState } from "react";

function App(props) {
  // Set default value of card deck to new shuffled deck
  const [cardDeck, setCardDeck] = useState(makeShuffledDeck());
  // currCards holds the cards from the current round
  const [currCards, setCurrCards] = useState([]);

  //Scores state
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [win1, setWin1] = useState(0);
  const [win2, setWin2] = useState(0);

  const [gameState, setGameState] = useState("Deal Cards To Start The Game");

  //Assign each player a card
  const dealCards = () => {
    if (cardDeck.length < 4) {
      setGameState("Game Over, Play Again"); //replace with button and message to play again and which player won the game by tracking the one with the biggest score that game
    }

    const newDeck = [...cardDeck];
    const card1 = newDeck.pop();
    const card2 = newDeck.pop();
    const newCurrCards = [card1, card2];

    setCurrCards(newCurrCards);
    setCardDeck(newDeck);

    //Check winner of the game
    if (cardDeck.length < 4) {
      score1 > score2
        ? setWin1((prevWin) => prevWin + 1)
        : setWin2((prevWin) => prevWin + 1);
    }

    //Check who won the round
    if (card1.rank === card2.rank) {
      setGameState("It's A Draw!");
    } else if (card1.rank > card2.rank) {
      setScore1((prevScore) => (prevScore += 1));
      setGameState("Player 1 Won The Round");
    } else {
      setScore2((prevScore) => (prevScore += 1));
      setGameState("Player 2 Won The Round");
    }
  };

  const playAgain = () => {
    setCardDeck(makeShuffledDeck());
    setCurrCards([]);
    setScore1(0);
    setScore2(0);
    setGameState("Deal Cards To Start The Game");
  };

  // You can access your current components state here, as indicated below
  const currCardElems = currCards.map(({ name, suit }) => (
    // Give each list element a unique key
    <div key={`${name}${suit}`}>
      {name} of {suit}
    </div>
  ));

  return (
    <>
      <div className="card">
        <h2>React High Card Game🚀</h2>
        <h3>Player 1 Card: {currCardElems[0]}</h3>
        <h3>Player 2 Card: {currCardElems[1]}</h3>
        <br />
        <button
          onClick={dealCards}
          disabled={cardDeck.length < 2}
          hidden={cardDeck.length < 2}
        >
          Deal
        </button>
        <button
          onClick={playAgain}
          disabled={cardDeck.length >= 2}
          hidden={cardDeck.length >= 2}
        >
          Play Again
        </button>

        <h2>{gameState}</h2>

        <table>
          <thead>
            <tr>
              <th>Players</th>
              <th>Round Score</th>
              <th>Games Won</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player 1</td>
              <td>{score1}</td>
              <td>{win1}</td>
            </tr>
            <tr>
              <td>Player 2</td>
              <td>{score2}</td>
              <td>{win2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
