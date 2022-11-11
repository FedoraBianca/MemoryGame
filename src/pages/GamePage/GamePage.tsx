import Header from "../../components/Header";
import Disc from "../../components/Disc";
import { BoardStyle, GamePageStyles } from "./GamePage.style";
import AppContext from "../../AppContext";
import { useContext, useEffect, useState } from "react";
import { Game, getRandomInt, GridSizeEnum, IDisc } from "../../utils/game";

const GamePage: React.FC = () => {
  const { gameOptions, game, setGame } = useContext(AppContext);
  const [updateKey, setUpdateKey] = useState(getRandomInt(1, 100));

  useEffect(() => {
    setGame(new Game(gameOptions));
  }, []);

  const handleDiscClick = (index: number) => {
    setUpdateKey(getRandomInt(2 * updateKey, 3 * updateKey));
    game?.flipDisc(index);
  };

  return (
    <GamePageStyles>
      <Header />
      <BoardStyle boardSize={gameOptions.gridSize === GridSizeEnum.small ? 4 : 6}>
        {game && game.grid.map((disc: IDisc, index) => {
          return (
            <Disc
              onClick={() => handleDiscClick(index)}
              disc={game.grid[index]}
              key={index}
            ></Disc>
          );
        })}
      </BoardStyle>
      <div className="Footer">
        <div>Current turn: {game?.currentTurn}</div>
        <div>player1 {game?.score[0]}</div>
        <div>player2 {game?.score[1]}</div>
        <div>player3 {game?.score[2]}</div>
        <div>player4 {game?.score[3]}</div>
      </div>

    </GamePageStyles>
  );
};

export default GamePage;
