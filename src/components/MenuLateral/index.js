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
          <img src={IconHome} />
          <Link to="/home">Home</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconAdd} />
          <Link to="/register">Cadastrar Aluno</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconGym} />
          <Link to="/registerAcademy">Cadastrar Academia</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconAula} />
          <Link to="/aulas">Aulas</Link>
        </ItensMenu>

        <ItensMenu>
          <img src={iconUser} />
          <Link to="/clientes">Clientes</Link>
        </ItensMenu>
      </MenuContainer>
    </ModalContainer>
  );
}

export default Modal;
