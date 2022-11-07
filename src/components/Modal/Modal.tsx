import { ModalWrapper } from "./Modal.style";

export interface IModal {
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModal> = ({
  children,
  className = ''
}) => {
  return (
    <ModalWrapper className={ className }>
      {children}
    </ModalWrapper>
  );
};

export default Modal;