import React from "react";
import { DiscStyle } from "./Disc.style";

export interface IDiscProps {
  type: "number" | "icon";
  onClick: (e: React.MouseEvent) => void;
  flipped: boolean;
  matched: boolean;
}

const Disc: React.FC<IDiscProps> = ({
  type = "number",
  onClick,
  flipped = false,
  matched = false,
}) => {
  if (type === "number") {
    return (
      <DiscStyle onClick={onClick} flipped={flipped} matched={matched}>
        2
      </DiscStyle>
    );
  } else {
    return (
      <DiscStyle onClick={onClick} flipped={flipped} matched={matched}>
        icon
      </DiscStyle>
    );
  }
};

export default Disc;
