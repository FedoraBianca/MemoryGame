import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export interface IPlayerCardWrapper {
  currentTurn: boolean;
}

export const PlayerCardWrapper = styled.div<IPlayerCardWrapper>`
  background-color: ${(props) =>
    props.currentTurn ? theme.colors.orange : theme.colors.whiteGrey};
  border-radius: 5px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) {
    align-items: flex-start;
    border-radius: 10px;

    .label-desktop {
      font-size: 15px;
    }
  }

  .value-mobile {
    font-size: 24px;
    color: ${(props) =>
      props.currentTurn ? theme.colors.lightWhite : theme.colors.mediumBlue};
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;

    .label-desktop {
      font-size: 18px;
    }

    .value-mobile {
      font-size: 32px;
    }
  }

  .label-mobile {
    color: ${(props) =>
      props.currentTurn ? theme.colors.lightWhite : theme.colors.mediumBlue};
    font-size: 15px;
  }

  .label-desktop {
    display: none;
  }

  &:after {
    content: ${(props) => (props.currentTurn ? `""` : `none`)};
    position: absolute;
    left: 50%;
    bottom: 100%;
    border: 20px solid transparent;
    border-bottom-color: orange;
    border-top: 0px;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 768px) {
    .label-mobile {
      display: none;
    }

    .label-desktop {
      display: block;
      color: ${(props) =>
        props.currentTurn ? theme.colors.lightWhite : theme.colors.mediumBlue};
    }
  }
`;
