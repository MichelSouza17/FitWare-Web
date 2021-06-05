import { Link } from "react-router-dom";
import { ModalContainer, MenuContainer, ItensMenu} from "./styles";

function Modal({children, handleClose}) {
  return (
      <ModalContainer>
        <span onClick={handleClose}>&times;</span>
        {children}
        <MenuContainer>
        <ItensMenu>
            <Link to="/">Home</Link>
          </ItensMenu>

          <ItensMenu>
            <Link to="/register">Cadastrar Aluno</Link>
          </ItensMenu>

          <ItensMenu>
            <Link to="/aulas">Aulas</Link>
          </ItensMenu>

          <ItensMenu>
            <Link to="/clientes">Clientes</Link>
          </ItensMenu>

          <ItensMenu>
            <Link to="/agendamentos">Agendamentos do Dia</Link>
          </ItensMenu>

        </MenuContainer>
      </ModalContainer>
  );
}

export default Modal;
