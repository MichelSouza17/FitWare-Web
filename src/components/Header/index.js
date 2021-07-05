import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";
<<<<<<< HEAD

function Header(){
    return(
        <Container>
            <img src={Imglogo} />
        </Container>
    );
=======
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
>>>>>>> 4ba85e883bd09c2d7fbd902197c905ba83a2c6ba
}

export default Header;
