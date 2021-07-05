import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";
import Sair from "../../assets/signOut.svg";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../services/security";

function Header() {
  const history = useHistory();

  const handlerLogout = () => {
    signOut();
  };

  const handleReload = () => {
    history.push("/home");
  };

  return (
    <Container>
      <img src={Imglogo} onClick={handleReload} alt="logo" />
      <Link onClick={handlerLogout}>
        <img src={Sair} alt="signOut" />
      </Link>
    </Container>
  );
}

export default Header;
