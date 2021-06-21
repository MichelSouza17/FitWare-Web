import { Link } from "react-router-dom";
import { ModalContainer, MenuContainer, ItensMenu } from "./styles";

function Modal({ children }) {
  return (
    <ModalContainer>
      {children}
      <MenuContainer>
        <ItensMenu>
          <Link to="/home">Home</Link>
        </ItensMenu>

        <ItensMenu>
          <Link to="/register">Cadastrar Aluno</Link>
        </ItensMenu>

        <ItensMenu>
          <Link to="/registerAcademy">Cadastrar Academia</Link>
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
