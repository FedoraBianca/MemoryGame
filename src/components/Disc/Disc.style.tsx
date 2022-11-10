import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const DiscStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80px;
  max-height: 80px;
  color: ${theme.colors.lightWhite};
  background-color: ${theme.colors.charcoal};
  font-size: 56px;
  border-radius: 50%;
  cursor: pointer;

  .content {
    visibility: hidden;
  }

  &.flipped {
    background-color: ${theme.colors.lightBlue};
    cursor: default;

    .content {
      visibility: visible;
    }
  }

  &.selected {
    background-color: ${theme.colors.orange};
  }
`;
