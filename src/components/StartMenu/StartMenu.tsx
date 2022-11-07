import React from "react";
import Heading from "../Heading";

import { StartMenuStyle } from "./StartMenu.style";
import Button from "../Button";

const StartMenu: React.FC = () => {
  return (
    <StartMenuStyle>
      <Heading
        size="L"
        children="Select Theme"
        className="heading__component"
      />
      <div className="btn__container">
        <Button
          onClick={() => {}}
          type="M"
          btnText="Numbers"
          active={true}
          className="start-menu-btn"
        />
        <Button
          onClick={() => {}}
          type="M"
          btnText="Icons"
          active={false}
          className="start-menu-btn"
        />
      </div>
      <Heading
        size="L"
        children="Number of players"
        className="heading__component"
      />
      <div className="number-players__container">
        <Button
          onClick={() => {}}
          type="M"
          btnText="1"
          active={true}
          className="start-menu-btn"
        />
        <Button
          onClick={() => {}}
          type="M"
          btnText="2"
          active={false}
          className="start-menu-btn"
        />
        <Button
          onClick={() => {}}
          type="M"
          btnText="3"
          active={false}
          className="start-menu-btn"
        />
        <Button
          onClick={() => {}}
          type="M"
          btnText="4"
          active={false}
          className="start-menu-btn"
        />
      </div>
      <Heading size="L" children="Grid size" className="heading__component" />
      <div className="btn__container">
        <Button
          onClick={() => {}}
          type="M"
          btnText="4X4"
          active={true}
          className="start-menu-btn"
        />
        <Button
          onClick={() => {}}
          type="M"
          btnText="6X6"
          active={false}
          className="start-menu-btn"
        />
      </div>

      <Button
        onClick={() => {}}
        type="L"
        btnText="Start Game"
        className="start-game-btn"
      />
    </StartMenuStyle>
  );
};

export default StartMenu;
