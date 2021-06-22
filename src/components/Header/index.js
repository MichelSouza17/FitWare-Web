import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";
import Sair from "../../assets/signOut.png";
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
      <img src={Imglogo} onClick={handleReload} />
      <Link onClick={handlerLogout} to="/">
      <img src={Sair}/>
      </Link>
    </Container>
  );
}

export default Header;
