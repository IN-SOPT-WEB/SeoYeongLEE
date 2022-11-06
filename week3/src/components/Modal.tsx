import styled from "styled-components";
interface ModalProps {
  content: string;
}
function Modal({ content }: ModalProps) {
  return (
    <>
      <StyledBg></StyledBg>
      <StyledModal>
        <StyledContent>{content}</StyledContent>
      </StyledModal>
    </>
  );
}

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 2px solid #232323;
  border-radius: 20px;
  background-color: #fff;
`;
const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
const StyledContent = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
