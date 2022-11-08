import Button from "../Button";
import { MobileMenuStyles } from "./MobileMenu.style";

const MobileMenu: React.FC = () => {
  return (
    <MobileMenuStyles>
      <Button type="L" btnText="Restart" onClick={() => {}} className="btn" />
      <Button type="S" btnText="New Game" onClick={() => {}} className="btn" />
      <Button
        type="S"
        btnText="Resume Game"
        onClick={() => {}}
        className="btn"
      />
    </MobileMenuStyles>
  );
};

export default MobileMenu;
