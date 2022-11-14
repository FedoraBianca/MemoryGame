import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const ScoreMenuStyle = styled.div`
  display: grid;
  align-items: center;
  gap: 24px;
  background: ${theme.colors.darkWhite};
  border-radius: 10px;
  padding: 32px 24px 24px;

  @media (min-width: 768px) {
    gap: 40px;
    padding: 50px 56px 68px;
  }

  .score-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
    padding: 12px 16px;
    margin-bottom: 8px;
    background: ${theme.colors.whiteGrey};
    border-radius: 5px;

    &.winner {
      background: ${theme.colors.black};
      color: ${theme.colors.lightWhite};
    }

    &:not(.winner) {
      .label {
        color: ${theme.colors.mediumBlue};
      }
    }
  }

  @media (min-width: 768px) {
    .score-card {
      width: 542px;
    }
  }

  .label {
    font-size: 0.813rem;
  }

  .value {
    font-size: 1.25rem;
  }

  .btn-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 16px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: none;
    }

    > button {
      height: 48px;
    }

    h1,
    h3 {
      font-size: 1.125rem;
    }
  }

  .heading {
    font-size: 1.5rem;
    margin-bottom: 9px;
  }

  @media (min-width: 768px) {
    .heading {
      font-size: 3rem;
      margin-bottom: 16px;
    }
  }

  .sub-heading {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    .sub-heading {
      font-size: 1.125rem;
    }
  }
`;
