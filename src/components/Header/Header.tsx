import React from "react";
import Logo from "../Logo";
import Heading from "../Heading";
import Button from "../Button";
import { HeaderStyles } from "./Header.style";
import { theme } from "../../styles/Theme.style";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Logo color={theme.colors.black}>
        <Heading size="S" children="memory" className="logo-heading" />
      </Logo>
      <div className="buttons_container--desktop">
        <Button
          type="S"
          color={theme.colors.orange}
          onClick={() => {}}
          btnText="Restart"
        />
        <Button type="S" onClick={() => {}} btnText="New Game" />
      </div>
      <Button
        type="S"
        color={theme.colors.orange}
        onClick={() => {}}
        btnText="Menu"
        className="header-btn--mobile"
      />
    </HeaderStyles>
  );
};

export default Header;
