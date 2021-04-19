import Input from "../Input";
import {Overlay, ModalContainer} from "./styles";



function Modal({title, children, handleClose}) {
  return (
    <Overlay>
      <ModalContainer>
        <span onClick={handleClose}>&times;</span>
        <header>{title}</header>
        <Input>
        
        </Input>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
