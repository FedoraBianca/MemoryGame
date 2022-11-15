import { BoardStyle, GamePageStyles } from "./GamePage.style";
import AppContext from "../../AppContext";
import { useContext, useEffect, useState } from "react";
import {
  PlayerCard,
  Disc,
  Header,
  TimerCard,
  MovesCard,
  Modal,
  MobileMenu,
  ScoreMenu,
} from "../../components";
import { Game, getRandomInt, GridSizeEnum, IDisc } from "../../utils/game";

const GamePage: React.FC = () => {
  const {
    game,
    setGame,
    gameOptions,
    movesNumber,
    mobileModalShow,
    setMobileModalShow,
    setMovesNumber,
    setWinner,
    setCurrentTurn,
    setScore,
    score,
    endGame,
    showWinnersBoard,
    setShowWinnersBoard,
    setTimerInited,
  } = useContext(AppContext);
  const [updateKey, setUpdateKey] = useState(getRandomInt(1, 100));
  const arrayOfPlayers = Array.from(Array(gameOptions.playersNumber).keys());

  const MeniuModal = (props: any) => {
    return (
      <Modal isVisible={props.isVisible}>
        <MobileMenu />
      </Modal>
    );
  };

  const playerStats = () => {
    if (arrayOfPlayers.length === 1) {
      return (
        <div className="footer footer--single-player">
          <TimerCard />
          <MovesCard movesNumber={movesNumber} />
        </div>
      );
    } else {
      return (
        <div className="footer">
          {arrayOfPlayers.map((player, i) => (
            <div className="player-card__wrapper">
              <PlayerCard
                score={score ? score[i] : 0}
                currentTurn={game?.currentTurn === player + 1 ? true : false}
                index={player}
                key={player}
              />
              {game?.currentTurn === player + 1 ? (
                <span className="current-turn--label">CURRENT TURN</span>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    setGame(new Game(gameOptions));
  }, [gameOptions, setGame]);

  const handleOnMenuClick = () => {
    setMobileModalShow(true);
  };

  const handleDiscClick = (event: any, index: number) => {
    if (event.currentTarget.classList.contains("flipped")) {
      event.preventDefault();
    } else {
      if (game?.playersNumber === 1) {
        setTimerInited(true);
      }
      setUpdateKey(getRandomInt(2 * updateKey, 3 * updateKey));
      game?.flipDisc(index);

      if (game?.score) {
        let newSore = [...game?.score];
        setScore(newSore);
      }

      setMovesNumber(game?.movesNumber);
      setCurrentTurn(game?.currentTurn);

      if (game?.allDiscsAreFliped()) {
        if (game?.currentTurn) {
          let scoreMap = game?.score.map((score, index) => ({
            score: score,
            index: index + 1,
          }));

          scoreMap[game?.currentTurn - 1].score++;

          const newScore = scoreMap.map((object) => object.score);
          setScore(newScore);
        }

        setWinner(game?.winner);

        if (game?.winner) {
          setShowWinnersBoard(true);
          endGame(game?.winner);
        }
      }
    }
  };

  return (
    <GamePageStyles>
      <Header handleClick={handleOnMenuClick} />
      <BoardStyle
        boardSize={gameOptions.gridSize === GridSizeEnum.small ? 4 : 6}
      >
        {game &&
          game.grid.map((disc: IDisc, index) => {
            return (
              <Disc
                onClick={(event) => handleDiscClick(event, index)}
                disc={game.grid[index]}
                key={index}
                gridSize={gameOptions.gridSize}
              ></Disc>
            );
          })}
      </BoardStyle>
      {playerStats()}
      <MeniuModal isVisible={mobileModalShow} />
      <Modal isVisible={showWinnersBoard}>
        <ScoreMenu />
      </Modal>
    </GamePageStyles>
  );
};

export default GamePage;
