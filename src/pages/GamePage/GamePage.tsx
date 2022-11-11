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

const gameSize = 6;
const boardArray = Array.from(Array(gameSize * gameSize).keys());

const GamePage: React.FC = () => {
  const {
    discTheme,
    gameOptions,
    setGameOptions,
    currentPlayer,
    score,
    currentGame,
    movesNumber,
    mobileModalShow,
    setMobileModalShow,
  } = useContext(AppContext);
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
    console.log("currentGame.score ", currentGame);
    playerStats = (
      <div className="footer">
        {arrayOfPlayers.map((player, i) => (
          <div className="player-card__wrapper">
            <PlayerCard
              score={currentGame?.score[i]}
              currentTurn={
                currentGame?.currentTurn === player + 1 ? true : false
              }
              index={player}
              key={player}
            />
            {currentGame?.currentTurn === player + 1 ? (
              <span className="current-turn--label">CURRENT TURN</span>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    );
  }

  // const handleDiscClick = () => {
  //   setGameOptions({ ...gameOptions, discFlips: gameOptions.discFlips + 1 });
  // };

  useEffect(() => {
    console.log("From global state: ", discTheme, gameOptions);
    console.log("arrayOfPlayers", arrayOfPlayers);
  });

  const handleOnMenuClick = () => {
    console.log("handleOnMenuClick");
    setMobileModalShow(true);
  };

  return (
    <GamePageStyles>
      <Header handleClick={handleOnMenuClick} />
      <BoardStyle boardSize={6}>
        {boardArray.map((disc, i) => {
          return (
            <Disc
              type="icon"
              onClick={() => {}}
              flipped={false}
              matched={false}
              key={i}
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
