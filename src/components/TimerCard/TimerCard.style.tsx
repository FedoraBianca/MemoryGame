import styled from "styled-components";
import { theme } from "../../styles/Theme.style";

export const TimerCardWrapper = styled.div`
  background: ${theme.colors.whiteGrey};
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  .label {
    color: ${theme.colors.mediumBlue};
    font-size: 1.125rem;
  }
`;
