import React from "react";
import { LargeButton, MediumButton, SmallButton } from "./Button.style";
import Heading from "../Heading";

export interface IButton {
  onClick: (e: React.MouseEvent) => void;
  type?: "S" | "M" | "L";
  active?: boolean;
  className?: string;
  color?: string;
  btnText: string;
}

const Button: React.FC<IButton> = ({
  onClick = null,
  type,
  active = false,
  className = "",
  color,
  btnText,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  switch (type) {
    case "L":
      return (
        <LargeButton
          active={active}
          onClick={handleClick}
          className={className}
        >
          <Heading size="L" children={btnText} />
        </LargeButton>
      );
    case "M":
      return (
        <MediumButton
          active={active}
          onClick={handleClick}
          className={className}
        >
          <Heading size="S" children={btnText} />
        </MediumButton>
      );
    case "S":
      return (
        <SmallButton
          active={active}
          onClick={handleClick}
          className={className}
          color={color}
        >
          <Heading size="S" children={btnText} />
        </SmallButton>
      );
    default:
      return (
        <SmallButton
          active={active}
          onClick={handleClick}
          className={className}
          color={color}
        >
          <Heading size="S" children={btnText} />
        </SmallButton>
      );
  }
};

export default Button;
