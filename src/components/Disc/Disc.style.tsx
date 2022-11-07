import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.style";

export interface IDiscWrapper {
  flipped: boolean;
  matched: boolean;
}

export const DiscStyle = styled.div<IDiscWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.lightWhite};
  background-color: ${(prop) =>
    prop.matched
      ? theme.colors.orange
      : prop.flipped
      ? theme.colors.lightBlue
      : theme.colors.charcoal};
  border-radius: 41px;
  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.matched
        ? theme.colors.orange
        : prop.flipped
        ? theme.colors.lightBlue
        : theme.colors.blue};
  }
`;
