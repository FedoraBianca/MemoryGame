import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.style";

const GridStyles = css`
  display: grid;
  gap: 10px;
`;

export const StartMenuStyle = styled.div`
  padding: 24px;
  background: ${theme.colors.lightWhite};
  border-radius: 10px;

  @media (min-width: 768px) {
    padding: 56px;
  }

  .btn__container {
    ${GridStyles}
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    .btn__container {
      gap: 30px;
    }
  }

  .number-players__container {
    ${GridStyles}
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 768px) {
    .number-players__container {
      gap: 22px;
    }
  }

  .heading__component {
    font-size: 0.938rem;
    color: ${theme.colors.mediumBlue};
    margin-bottom: 10px;
    margin-top: 24px;
  }

  .heading__component:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    .heading__component {
      margin-bottom: 16px;
      margin-top: 32px;
      font-size: 1.25rem;
    }

    .heading__component:first-of-type {
      margin-top: 0;
    }
  }

  .start-menu-btn {
    height: 40px;
  }

  .start-game-btn {
    height: 48px;
    margin-top: 32px;

    h1 {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 768px) {
    .start-game-btn {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;
