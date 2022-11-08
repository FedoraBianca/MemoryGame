import React from "react";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import { MovesCardWrapper } from "./MovesCard.style";

export interface IMovesCard {
  movesNumber: number;
  className?: string;
}

const MovesCard: React.FC<IMovesCard> = ({ movesNumber, className = "" }) => {
  return (
    <MovesCardWrapper>
      <Heading
        size="S"
        color={theme.colors.mediumBlue}
        children="Moves"
        className="label"
      />
      <Heading size="M" color={theme.colors.charcoal} children={movesNumber} />
    </MovesCardWrapper>
  );
};

export default MovesCard;
