import { Link } from "react-router-dom";
import { ModalContainer, MenuContainer, ItensMenu } from "./styles";

import IconHome from "../../assets/home.png";
import iconGym from "../../assets/iconGym.png";
import iconAula from "../../assets/iconAula.png";
import iconUser from "../../assets/iconUser.png";
import iconAdd from "../../assets/iconAdd.png";

function Modal({ children }) {
  return (
    <ModalContainer>
      {children}
      <MenuContainer>
        <ItensMenu>
          <img src={IconHome} alt="iconHome" />
          <Link to="/home">Home</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconAdd} alt="iconRegister" />
          <Link to="/register">Cadastrar Aluno</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconAula} alt="iconAulas" />
          <Link to="/aulas">Criar Aulas</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconUser} alt="iconAlunos" />
          <Link to="/clientes">Alunos</Link>
        </ItensMenu>
      </MenuContainer>
    </ModalContainer>
  );
}

export default Modal;
