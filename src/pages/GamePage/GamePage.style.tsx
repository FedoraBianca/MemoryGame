import styled from "styled-components";

export interface IBoard {
  boardSize: 4 | 6;
}

export const BoardStyle = styled.div<IBoard>`
  display: grid;
  grid-template-columns: repeat(${(props: IBoard) => props.boardSize}, 1fr);
  grid-template-rows: repeat(${(props: IBoard) => props.boardSize}, 1fr);
  aspect-ratio: 1;

  @media (min-width: 768px) {
    max-width: 50%;
    height: 100%;
    margin: 0 auto;
    gap: 5%;
    width: 100%;
  }
`;

export const GamePageStyles = styled.div`
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

  .footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: auto;
    gap: 6%;

    @media (min-width: 768px) {
      &--single-player {
        width: 60%;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 768px) {
    .footer {
      gap: 10px;
      padding-bottom: 100px;
    }
  }

  .current-turn--label {
    display: none;
  }

  @media (min-width: 1024px) {
    .current-turn--label {
      display: block;
      margin-top: 23px;
      font-size: 13px;
      text-align: center;
      letter-spacing: 5px;
      color: #152938;
    }
  }
`;
