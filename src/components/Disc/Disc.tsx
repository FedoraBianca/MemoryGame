import React from "react";
import Icon from "../Icon";
import { DiscStyle } from "./Disc.style";

export interface IDisc {
  type: "number" | "icon";
  onClick: (e: React.MouseEvent) => void;
  flipped: boolean;
  matched: boolean;
}

const Disc: React.FC<IDisc> = ({
  type = "number",
  onClick,
  flipped = false,
  matched = false,
}) => {
  if (type === "number") {
    return (
      <DiscStyle
        onClick={onClick}
        flipped={flipped}
        matched={matched}
        className="disc-content"
      >
        <span>2</span>
      </DiscStyle>
    );
  } else {
    return (
      <DiscStyle onClick={onClick} flipped={flipped} matched={matched}>
        <Icon
          icon="camera"
          color="#111517"
          size="60px"
          className="disc-content"
        />
      </DiscStyle>
    );
  }
};

export default Disc;
