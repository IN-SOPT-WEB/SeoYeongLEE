import styled from "styled-components";

interface ModalProps {
  modalContent: string;
}

function Modal(props: ModalProps) {
  const { modalContent } = props;
  return <StyledRoot>{modalContent}</StyledRoot>;
}

export default Modal;

const StyledRoot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  color: #232323;
  background-color: #fff;
  box-shadow: -1px -1px 10px #c1c1c1;
  border-radius: 15px;
  transform: translate(-50%, -50%);
`;
