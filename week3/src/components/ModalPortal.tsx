import reactDom from "react-dom";
interface ModalPortalProps {
  children: React.ReactNode;
}
const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("modal");
  if (!el) return null;
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
