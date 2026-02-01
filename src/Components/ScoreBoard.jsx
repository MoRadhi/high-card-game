import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ScoreBoard = ({ players }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 4,
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "primary.main" }}>PLAYER</TableCell>
            <TableCell align="right" sx={{ color: "primary.main" }}>
              ROUND SCORE
            </TableCell>
            <TableCell align="right" sx={{ color: "secondary.main" }}>
              TOTAL WINS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="right">{player.score}</TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                {player.wins}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreBoard;
