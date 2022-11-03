import React from "react";
import { LargeButton, MediumButton, SmallButton } from "./Button.style";
import { theme } from "../../styles/Theme.style";

export interface IButton {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  type?: "S" | "M" | "L";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  type,
  disabled = false,
  className = "",
}) => {
  switch (type) {
    case "L":
      return (
        <LargeButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          {children}
        </LargeButton>
      );
    case "M":
      return (
        <MediumButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          {children}
        </MediumButton>
      );
    case "S":
      return (
        <SmallButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          {children}
        </SmallButton>
      );
    default:
      return (
        <SmallButton
          disabled={disabled}
          onClick={onClick}
          className={className}
        >
          {children}
        </SmallButton>
      );
  }
};

export default Button;
