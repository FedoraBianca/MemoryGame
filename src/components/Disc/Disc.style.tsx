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
  max-width: 80px;
  max-height: 80px;
  color: ${theme.colors.lightWhite};
  background-color: ${(prop) =>
    prop.matched
      ? theme.colors.orange
      : prop.flipped
      ? theme.colors.lightBlue
      : theme.colors.charcoal};
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.matched
        ? theme.colors.orange
        : prop.flipped
        ? theme.colors.lightBlue
        : theme.colors.blue};
  }

  .disc-content {
    display: ${(prop) => (prop.flipped ? "flex" : "none")};
  }
`;
