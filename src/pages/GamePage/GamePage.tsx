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
} from "../../components";
import { Game, getRandomInt, GridSizeEnum, IDisc } from "../../utils/game";

const gameSize = 6;
const boardArray = Array.from(Array(gameSize * gameSize).keys());

const GamePage: React.FC = () => {
  const {
    game,
    setGame,
    gameOptions,
    movesNumber,
    mobileModalShow,
    setMobileModalShow,
    setMovesNumber,
  } = useContext(AppContext);
  const [updateKey, setUpdateKey] = useState(getRandomInt(1, 100));
  const arrayOfPlayers = Array.from(Array(gameOptions.playersNumber).keys());

  const MeniuModal = (props: any) => {
    if (props.isVisible) {
      return (
        <Modal>
          <MobileMenu />
        </Modal>
      );
    }
    return <></>;
  };

  let playerStats;
  if (arrayOfPlayers.length === 1) {
    playerStats = (
      <div className="footer footer--single-player">
        <TimerCard />
        <MovesCard movesNumber={movesNumber} />
      </div>
    );
  } else {
    console.log("game ", game);
    playerStats = (
      <div className="footer">
        {arrayOfPlayers.map((player, i) => (
          <div className="player-card__wrapper">
            <PlayerCard
              score={game?.score[i]}
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

  useEffect(() => {
    setGame(new Game(gameOptions));
  }, []);

  const handleOnMenuClick = () => {
    console.log("handleOnMenuClick");
    setMobileModalShow(true);
  };

  const handleDiscClick = (index: number) => {
    setUpdateKey(getRandomInt(2 * updateKey, 3 * updateKey));
    game?.flipDisc(index);
    console.log("game?.movesNumber ", game?.movesNumber);
    console.log("game?.discFlips ", game?.discFlips);
    setMovesNumber(game?.movesNumber);
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
                onClick={() => handleDiscClick(index)}
                disc={game.grid[index]}
                key={index}
              ></Disc>
            );
          })}
      </BoardStyle>
      {playerStats}
      <MeniuModal isVisible={mobileModalShow} />
    </GamePageStyles>
  );
};

export default GamePage;
