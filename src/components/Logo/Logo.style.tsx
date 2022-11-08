import styled from "styled-components";

interface ILogoWrapper {
  color: string;
}

export const LogoStyle = styled.div<ILogoWrapper>`
  display: flex;
  align-items: center;

  h1,
  h2,
  h3 {
    color: ${(props) => props.color};
  }
`;
