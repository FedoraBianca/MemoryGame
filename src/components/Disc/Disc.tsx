import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import { theme } from "../../styles/Theme.style";
import { DiscThemeEnum, IDisc, GridSizeEnum } from "../../utils/game";
import Icon from "../Icon";
import { DiscStyle } from "./Disc.style";

export interface IDiscProps {
  onClick: (e: React.MouseEvent) => void;
  disc: IDisc;
  gridSize: GridSizeEnum;
}

const Disc: React.FC<IDiscProps> = ({ onClick, disc, gridSize }) => {
  const { discTheme } = useContext(AppContext);
  const iconList: string[] = [
    "camera",
    "headphones",
    "music",
    "pacman",
    "spades",
    "clubs",
    "binoculars",
    "lock",
    "lock",
    "bug",
    "trophy",
    "gift",
    "mug",
    "airplane",
    "power",
    "attachment",
    "sun",
    "star-full",
    "heart",
  ];
  const [styleClass, setStypeClass] = useState("");

  useEffect(() => {
    let className = "";
    if (disc.flipped) {
      className = className + " flipped";
    }

    if (disc.selected) {
      className = className + " selected";
    }

    setStypeClass(className);
  }, [disc.flipped, disc.selected]);

  const handleClick = (e: React.MouseEvent) => {
    onClick(e);
  };

  return (
    <DiscStyle onClick={handleClick} className={styleClass} gridSize={gridSize}>
      <div className="content">
        {discTheme === DiscThemeEnum.numbers && <span>{disc.value}</span>}
        {discTheme === DiscThemeEnum.icons && (
          <Icon
            icon={iconList[disc.value - 1]}
            size="28px"
            color={theme.colors.lightWhite}
            className="icon"
          />
        )}
      </div>
    </DiscStyle>
  );
};

export default Disc;
