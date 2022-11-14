import { ModalWrapper } from "./Modal.style";

export interface IModal {
  children: React.ReactNode;
  className?: string;
  isVisible: boolean;
}

const Modal: React.FC<IModal> = ({ children, isVisible, className = "" }) => {
  return (
    <ModalWrapper isVisible={isVisible} className={className}>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
