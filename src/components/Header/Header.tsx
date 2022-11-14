import React from "react";
import Logo from "../Logo";
import Heading from "../Heading";
import Button from "../Button";
import { HeaderStyles } from "./Header.style";
import { theme } from "../../styles/Theme.style";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import { useContext } from "react";

export interface IHeader {
  handleClick: (e: React.MouseEvent) => void;
}

const Header: React.FC<IHeader> = ({ handleClick }) => {
  const { restartGame, setMobileModalShow, newGame } = useContext(AppContext);

  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate(`/`);
    newGame();
  };

  const handleGameRestart = () => {
    restartGame();
    setMobileModalShow(false);
  };

  return (
    <HeaderStyles>
      <Logo color={theme.colors.black}>
        <Heading size="S" children="memory" className="logo-heading" />
      </Logo>
      <div className="buttons_container--desktop">
        <Button
          type="S"
          color={theme.colors.orange}
          onClick={handleGameRestart}
          btnText="Restart"
        />
        <Button type="S" onClick={handleNewGame} btnText="New Game" />
      </div>
      <Button
        type="S"
        color={theme.colors.orange}
        onClick={handleClick}
        btnText="Menu"
        className="header-btn--mobile"
      />
    </HeaderStyles>
  );
};

export default Header;
