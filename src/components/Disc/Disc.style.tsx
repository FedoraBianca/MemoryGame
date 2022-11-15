import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

enum GridSizeEnum {
  small,
  large,
}

export interface IDiscStyle {
  gridSize: GridSizeEnum.small | GridSizeEnum.large;
}

export const DiscStyle = styled.div<IDiscStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.gridSize === GridSizeEnum.small ? "72.53px" : "46.88px"};
  color: ${theme.colors.lightWhite};
  background-color: ${theme.colors.charcoal};
  font-size: ${(props) =>
    props.gridSize === GridSizeEnum.small ? "40px" : "24px"};
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1;

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: ${(props) =>
      props.gridSize === GridSizeEnum.small ? "40px" : "44px"};
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

  @media (min-width: 768px) {
    .icon {
      font-size: 36px;
    }
  }
`;
