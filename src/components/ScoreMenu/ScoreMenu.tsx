import { ScoreMenuStyle } from "./ScoreMenu.style";
import Heading from "../Heading";
import Button from "../Button";
import { theme } from "../../styles/Theme.style";

const currentPlayer = {
  number: 1,
  winner: true,
};

const numberOfPlayers = [1, 2, 3, 4];

const pairsMatched = 8;

const headingStatus = {
  playerWins: `Player ${currentPlayer.number} Wins!`,
  tie: "It's a tie!",
  singlePlayerWins: "You did it",
};

const gameOverText = {
  multiplePlayersStatus: "Game over! Here are the results...",
  singlePlayerStatus: "Game over! Here's how you got on...",
};

const ScoreMenu: React.FC = () => {
  let scoreCardWrapper;
  if (numberOfPlayers.length > 1) {
    scoreCardWrapper = numberOfPlayers.map((player: number, i) => (
      <div className={`score-card ${currentPlayer.winner ? "winner" : ""}`}>
        <span className="label">
          Player {player} {currentPlayer.winner ? "(Winner!)" : ""}
        </span>
        <span className="value">{pairsMatched} Pairs</span>
      </div>
    ));
  } else {
    scoreCardWrapper = (
      <>
        <div className="score-card">
          <span className="label">Time elapsed</span>
          <span className="value">1:53</span>
        </div>
        <div className="score-card">
          <span className="label">Moves Taken</span>
          <span className="value">39 Moves</span>
        </div>
      </>
    );
  }

  return (
    <ScoreMenuStyle>
      <div style={{ textAlign: "center" }}>
        <Heading
          size="S"
          children={headingStatus.playerWins}
          className="heading"
        />
        <Heading
          size="S"
          children={gameOverText.multiplePlayersStatus}
          color={theme.colors.mediumBlue}
          className="sub-heading"
        />
      </div>
      <div>{scoreCardWrapper}</div>
      <div className="btn-container">
        <Button type="L" btnText="Restart" onClick={() => {}} />
        <Button type="S" btnText="Setup New Game" onClick={() => {}} />
      </div>
    </ScoreMenuStyle>
  );
};

export default ScoreMenu;
