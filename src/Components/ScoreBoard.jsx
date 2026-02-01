import React from "react";

const ScoreBoard = ({ players }) => {
  //I need to pass the score from the dealer to the scoreboard for each player
  return (
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Players</th>
            <th>Round Score</th>
            <th>Games Won</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
