import { ScoreMenuStyle } from "./ScoreMenu.style";
import Heading from "../Heading";
import Button from "../Button";
import { theme } from "../../styles/Theme.style";
import AppContext from "../../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const headingStatus = {
  tie: "It's a tie!",
  singlePlayerWins: "You did it",
};

const gameOverText = {
  multiplePlayersStatus: "Game over! Here are the results...",
  singlePlayerStatus: "Game over! Here's how you got on...",
};

const ScoreMenu: React.FC = () => {
  const {
    game,
    restartGame,
    movesNumber,
    score,
    setMobileModalShow,
    setShowWinnersBoard,
    showWinnersBoard,
    minutes,
    seconds,
    newGame,
  } = useContext(AppContext);
  const navigate = useNavigate();

  let scoreCardWrapper;

  if (score) {
    const scoreDescendWidthIndex = score
      .map((v, i) => ({
        value: v,
        playerIndex: i,
      }))
      .sort((a, b) => b.value - a.value);

    if (game?.playersNumber !== undefined) {
      if (game?.playersNumber > 1) {
        if (game?.tieMatch) {
          scoreCardWrapper = scoreDescendWidthIndex?.map((score, i) => (
            <div
              className={`score-card ${
                game?.winner === score.value ? "winner" : ""
              }`}
            >
              <span className="label">
                Player {score.playerIndex + 1}{" "}
                {game?.winner === score.value ? "(Winner!)" : ""}
              </span>
              <span className="value">{score.value} Pairs</span>
            </div>
          ));
        } else {
          scoreCardWrapper = scoreDescendWidthIndex?.map((score, i) => (
            <div
              className={`score-card ${
                game?.winner === score.value ? "winner" : ""
              }`}
            >
              <span className="label">
                Player {score.playerIndex + 1}{" "}
                {game?.winner === score.value ? "(Winner!)" : ""}
              </span>
              <span className="value">{score.value} Pairs</span>
            </div>
          ));
        }
      } else {
        scoreCardWrapper = (
          <>
            <div className="score-card">
              <span className="label">Time elapsed</span>
              <span className="value">
                {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </div>
            <div className="score-card">
              <span className="label">Moves Taken</span>
              <span className="value">{movesNumber}</span>
            </div>
          </>
        );
      }
    }
  }

  let headingStatusElement;
  if (game?.tieMatch) {
    headingStatusElement = (
      <Heading size="S" children={headingStatus.tie} className="heading" />
    );
  } else {
    if (game?.playersNumber && game?.playersNumber === 1) {
      headingStatusElement = (
        <Heading
          size="S"
          children={headingStatus.singlePlayerWins}
          className="heading"
        />
      );
    } else {
      headingStatusElement = (
        <Heading
          size="S"
          children={`Player ${game?.currentTurn} Wins!`}
          className="heading"
        />
      );
    }
  }

  const handleGameRestart = () => {
    restartGame();
    setMobileModalShow(false);

    if (showWinnersBoard) {
      setShowWinnersBoard(false);
    }
  };

  const handleNewGame = () => {
    navigate(`/`);
    newGame();

    if (showWinnersBoard) {
      setShowWinnersBoard(false);
    }
  };

  return (
    <ScoreMenuStyle>
      <div style={{ textAlign: "center" }}>
        {headingStatusElement}
        <Heading
          size="S"
          children={
            game?.playersNumber && game?.playersNumber > 1
              ? gameOverText.multiplePlayersStatus
              : gameOverText.singlePlayerStatus
          }
          color={theme.colors.mediumBlue}
          className="sub-heading"
        />
      </div>
      <div>{scoreCardWrapper}</div>
      <div className="btn-container">
        <Button type="L" btnText="Restart" onClick={handleGameRestart} />
        <Button type="S" btnText="Setup New Game" onClick={handleNewGame} />
      </div>
    </ScoreMenuStyle>
  );
};

export default ScoreMenu;
