import styled from "styled-components";

interface IModalWrapper {
  isVisible: boolean;
}

export const ModalWrapper = styled.div<IModalWrapper>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  display: ${(prop) => (prop.isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`;
