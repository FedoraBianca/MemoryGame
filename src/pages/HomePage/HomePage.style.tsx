import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const HomePageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  background-color: ${theme.colors.black};

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
    justify-content: center;
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
