import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const DiscStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 46.88px;
  min-height: 46.88px;
  max-width: 80px;
  max-height: 80px;
  color: ${theme.colors.lightWhite};
  background-color: ${theme.colors.charcoal};
  font-size: 56px;
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

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
