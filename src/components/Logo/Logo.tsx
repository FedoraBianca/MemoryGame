import React from "react";
import { LogoStyle } from "./Logo.style";

export interface ILogo {
  color: string;
  children: React.ReactNode;
  className?: string;
}

const Logo: React.FC<ILogo> = ({ className = "", children, color }) => {
  return (
    <LogoStyle color={color} className={`${className}`}>
      {children}
    </LogoStyle>
  );
};

export default Logo;
