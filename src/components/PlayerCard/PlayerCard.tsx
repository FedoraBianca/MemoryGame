import React from "react";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import { PlayerCardWrapper } from "./PlayerCard.style.";

export interface IPlayerCard {
  score: number | undefined;
  currentTurn: boolean;
  index: number;
}

const PlayerCard: React.FC<IPlayerCard> = ({ score, currentTurn, index }) => {
  return (
    <>
      <PlayerCardWrapper currentTurn={currentTurn}>
        <Heading
          className="label-desktop"
          size={"M"}
          color={theme.colors.charcoal}
        >
          Player {index + 1}
        </Heading>
        <Heading
          className="label-mobile"
          size={"M"}
          color={theme.colors.charcoal}
        >
          P{index + 1}
        </Heading>
        <Heading
          size={"M"}
          color={theme.colors.charcoal}
          className="value-mobile"
          children={score}
        />
      </PlayerCardWrapper>
    </>
  );
};

export default PlayerCard;
