import Button from "../Button";
import { MobileMenuStyles } from "./MobileMenu.style";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { useNavigate } from "react-router-dom";

const MobileMenu: React.FC = () => {
  const {
    restartGame,
    newGame,
    gameOptions,
    mobileModalShow,
    setMobileModalShow,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const resumeGameOnClick = () => {
    setMobileModalShow(false);
  };

  const handleNewGame = () => {
    navigate(`/`);
  };

  const handleGameRestart = () => {
    restartGame();
    setMobileModalShow(false);
  };

  return (
    <MobileMenuStyles>
      <Button
        type="L"
        btnText="Restart"
        onClick={handleGameRestart}
        className="btn"
      />
      <Button
        type="S"
        btnText="New Game"
        onClick={handleNewGame}
        className="btn"
      />
      <Button
        type="S"
        btnText="Resume Game"
        onClick={resumeGameOnClick}
        className="btn"
      />
    </MobileMenuStyles>
  );
};

export default MobileMenu;
