import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.style";

export interface IButton {
  disabled: boolean;
}

const GeneralBtnStyles = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 26px;
`;

const smallHeight = css`
  height: 52px;
`;

export const LargeButton = styled(GeneralBtnStyles)`
  height: 70px;
  padding: 16px 32px;
  background-color: ${theme.colors.orange};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 32px;
  line-height: 40px;
  color: ${theme.colors.lightWhite};

  &:hover {
    background-color: ${theme.colors.lightOrange};
  }
`;

export const MediumButton = styled(GeneralBtnStyles)`
  ${smallHeight}
  padding: 10px 20px;
  background-color: ${(props) =>
    props.disabled ? theme.colors.lightBlue : theme.colors.charcoal};
  font-size: 26px;
  line-height: 32px;
  color: ${theme.colors.lightWhite};
  pointer-events: ${(props) => (props.disabled ? "none" : "unset")};

  &:hover {
    background-color: ${theme.colors.blue};
  }
`;

export const SmallButton = styled(GeneralBtnStyles)`
  padding: 14px 28px;
  background-color: ${theme.colors.whiteGrey};
  font-size: 20px;
  line-height: 25px;
  color: ${theme.colors.charcoal};

  &:hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.lightWhite};
  }
`;
