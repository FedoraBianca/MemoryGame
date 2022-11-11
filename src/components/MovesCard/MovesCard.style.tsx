import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const MovesCardWrapper = styled.div`
  flex-direction: column;
  grid-column: span 2;
  background: ${theme.colors.whiteGrey};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .label {
    color: ${theme.colors.mediumBlue};
    font-size: 15px;
  }

  .value {
    font-size: 24px;
  }
`;
