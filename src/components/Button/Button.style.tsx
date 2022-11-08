import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.style";

export interface IButton {
  active: boolean;
}

const GeneralBtnStyles = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 26px;
  cursor: pointer;
`;

const smallHeight = css`
  height: 52px;
`;

export const LargeButton = styled(GeneralBtnStyles)`
  height: 70px;
  padding: 16px 32px;
  background-color: ${theme.colors.orange};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${theme.colors.lightWhite};

  &:hover {
    background-color: ${theme.colors.lightOrange};
  }
`;

export const MediumButton = styled(GeneralBtnStyles)`
  ${smallHeight}
  padding: 10px 20px;
  background-color: ${(props) =>
    props.active ? theme.colors.charcoal : theme.colors.lightBlue};
  color: ${theme.colors.lightWhite};

  &:hover {
    background-color: ${theme.colors.blue};
  }
`;

export const SmallButton = styled(GeneralBtnStyles)`
  padding: 14px 28px;
  background-color: ${(props) =>
    props.color ? props.color : theme.colors.whiteGrey};
  color: ${theme.colors.charcoal};

  h3 {
    color: ${(props) =>
      props.color ? theme.colors.lightWhite : theme.colors.charcoal};
  }

  &:hover {
    background-color: ${(props) =>
      props.color ? theme.colors.lightOrange : theme.colors.blue};
    color: ${theme.colors.lightWhite};

    h3 {
      color: ${(props) =>
        props.color ? theme.colors.lightWhite : theme.colors.lightWhite};
    }
  }
`;
