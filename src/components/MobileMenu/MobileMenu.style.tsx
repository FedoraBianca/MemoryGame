import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme.style";

export const MobileMenuStyles = styled.div`
  display: grid;
  gap: 16px;
  width: 328px;
  padding: 24px;
  background: ${theme.colors.darkWhite};
  border-radius: 10px;

  .btn {
    height: 48px;

    h1,
    h3 {
      font-size: 1.125rem;
    }
  }
`;
