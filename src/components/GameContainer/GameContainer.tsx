import Header from "../Header";
import Disc from "../Disc";
import styled, { css } from "styled-components";

const gameSize = 6;
const boardArray = Array.from(Array(gameSize * gameSize).keys());

const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(${gameSize}, 1fr);
  grid-template-rows: repeat(${gameSize}, 1fr);
  aspect-ratio: 1;

  @media (min-width: 768px) {
    max-width: 50%;
    height: 100%;
    margin: 0 auto;
    gap: 5%;
    width: 100%;
  }
`;

const GameContainerStyles = styled.div`
  padding: 24px;
  display: grid;
  grid-template-rows: 40px 1fr 78px;
  gap: 10%;
  height: 100%;

  @media (min-width: 768px) {
    grid-template-rows: 52px 1fr 92px;
  }

  @media (min-width: 1025px) {
    grid-template-rows: 52px 1fr 130px;
  }
`;

const GameContainer: React.FC = () => {
  return (
    <GameContainerStyles>
      <Header />
      <BoardStyle>
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
      <div className="Footer">
        <div>player1</div>
        <div>player2</div>
        <div>player3</div>
        <div>player4</div>
      </div>
    </GameContainerStyles>
  );
};

export default GameContainer;
