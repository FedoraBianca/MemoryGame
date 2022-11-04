import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;

  .buttons_container--desktop {
    display: none;
  }

  @media (min-width: 768px) {
    .logo-heading {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    .buttons_container--desktop {
      display: flex;
      gap: 16px;
    }
  }

  @media (min-width: 768px) {
    .header-btn--mobile {
      display: none;
    }
  }
`;
