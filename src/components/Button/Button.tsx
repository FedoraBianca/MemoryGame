import React from "react";
import { LargeButton, MediumButton, SmallButton } from "./Button.style";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";

export interface IButton {
  onClick: (e: React.MouseEvent) => void;
  type?: "S" | "M" | "L";
  disabled?: boolean;
  className?: string;
  color?: string;
  btnText: string;
}

const Button: React.FC<IButton> = ({
  onClick,
  type,
  disabled = false,
  className = "",
  color,
  btnText,
}) => {
  switch (type) {
    case "L":
      return (
        <LargeButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          <Heading size="L" children={btnText} />
        </LargeButton>
      );
    case "M":
      return (
        <MediumButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          <Heading size="S" children={btnText} />
        </MediumButton>
      );
    case "S":
      return (
        <SmallButton
          disabled={disabled}
          onClick={onClick}
          className={className}
          color={color}
        >
          <Heading size="S" children={btnText} />
        </SmallButton>
      );
    default:
      return (
        <SmallButton
          disabled={disabled}
          onClick={onClick}
          className={className}
          color={color}
        >
          <Heading size="S" children={btnText} />
        </SmallButton>
      );
  }
};

export default Button;
