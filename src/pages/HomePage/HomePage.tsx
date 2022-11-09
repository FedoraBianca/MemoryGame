import React from "react";
import StartMenu from "../../components/StartMenu";
import Logo from "../../components/Logo";
import Heading from "../../components/Heading";
import { theme } from "../../styles/Theme.style";
import { HomePageStyle } from "./HomePage.style";

const HomePage: React.FC = () => {
  return (
    <HomePageStyle>
      <div className="home-page__container">
        <Logo color="#FCFCFC" className="logo__component">
          <Heading size="M" color={theme.colors.black}>memory</Heading>
        </Logo>
        <StartMenu />
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
