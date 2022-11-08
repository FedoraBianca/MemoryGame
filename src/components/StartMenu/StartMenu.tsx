import React, { useState } from "react";
import Heading from "../Heading";
import { useNavigate } from "react-router-dom";
import { StartMenuStyle } from "./StartMenu.style";
import Button from "../Button";
import { DiscThemeEnum, GridSizeEnum, IGameOptions, PlayerNumberType } from "../../utils/game";

const StartMenu: React.FC = () => {
  const [gameOptions, setGameOptions] = useState<IGameOptions>({ gridSize: GridSizeEnum.small, playersNumber: 1 });
  const [discTheme, setDiscTheme] = useState<DiscThemeEnum>(DiscThemeEnum.numbers);
  const navigate = useNavigate();

  const updatePlayerNumber = (number: PlayerNumberType) => () => {
    setGameOptions({ ...gameOptions, playersNumber: number });
  };

  const updateGridSize = (size: GridSizeEnum) => () => {
    setGameOptions({ ...gameOptions, gridSize: size });
  }

  const handleStartGame = () => {
    navigate(`/game`);
  };

  return (
    <StartMenuStyle>
      <Heading
        size="L"
        children="Select Theme"
        className="heading__component"
      />
      <div className="btn__container">
        <Button
          onClick={() => setDiscTheme(DiscThemeEnum.numbers)}
          type="M"
          btnText="Numbers"
          active={discTheme === DiscThemeEnum.numbers}
          className="start-menu-btn"
        />
        <Button
          onClick={() => setDiscTheme(DiscThemeEnum.icons)}
          type="M"
          btnText="Icons"
          active={discTheme === DiscThemeEnum.icons}
          className="start-menu-btn"
        />
      </div>
      <Heading
        size="L"
        children="Number of players"
        className="heading__component"
      />
      <div className="number-players__container">
        <Button
          onClick={updatePlayerNumber(1)}
          type="M"
          btnText="1"
          active={gameOptions.playersNumber === 1}
          className="start-menu-btn"
        />
        <Button
          onClick={updatePlayerNumber(2)}
          type="M"
          btnText="2"
          active={gameOptions.playersNumber === 2}
          className="start-menu-btn"
        />
        <Button
          onClick={updatePlayerNumber(3)}
          type="M"
          btnText="3"
          active={gameOptions.playersNumber === 3}
          className="start-menu-btn"
        />
        <Button
          onClick={updatePlayerNumber(4)}
          type="M"
          btnText="4"
          active={gameOptions.playersNumber === 4}
          className="start-menu-btn"
        />
      </div>
      <Heading size="L" children="Grid size" className="heading__component" />
      <div className="btn__container">
        <Button
          onClick={updateGridSize(GridSizeEnum.small)}
          type="M"
          btnText="4X4"
          active={gameOptions.gridSize === GridSizeEnum.small}
          className="start-menu-btn"
        />
        <Button
          onClick={updateGridSize(GridSizeEnum.large)}
          type="M"
          btnText="6X6"
          active={gameOptions.gridSize === GridSizeEnum.large}
          className="start-menu-btn"
        />
      </div>

      <Button
        onClick={handleStartGame}
        type="L"
        btnText="Start Game"
        className="start-game-btn"
      />
    </StartMenuStyle>
  );
};

export default StartMenu;
