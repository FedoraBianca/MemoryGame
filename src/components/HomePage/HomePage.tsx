import React from "react";
import StartMenu from "../StartMenu";
import Logo from "../Logo";
import Heading from "../Heading";
import { theme } from "../../styles/Theme.style";
import styled from "styled-components";

const HomePageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 56px;
  }

  .home-page__container {
    width: 100%;
  }

  @media (min-width: 768px) {
    .home-page__container {
      max-width: 654px;
    }
  }

  .logo__component {
    height: auto;
    margin-bottom: 46px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .logo__component {
      margin-bottom: 78px;
    }

    .logo__component h2 {
      font-size: 2.5rem;
    }
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageStyle>
      <div className="home-page__container">
        <Logo color="#FCFCFC" className="logo__component">
          <Heading
            size="M"
            color={theme.colors.black}
            children="memory"
          ></Heading>
        </Logo>
        <StartMenu />
      </div>
    </HomePageStyle>
  );
};

export default HomePage;
