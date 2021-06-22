import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";
import Sair from "../../assets/signOut.png";
import { Link } from "react-router-dom";
import { signOut } from "../../services/security";

function Header() {
  const handlerLogout = () => {
    signOut();
  };

  return (
    <Container>
      <img src={Imglogo} />
      <Link onClick={handlerLogout} to="/">
      <img src={Sair}/>
      </Link>
    </Container>
  );
}

export default Header;
