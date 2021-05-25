import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Header() {
  return (
    <Container>
      <img src={Imglogo} />

      <button>Login</button>
      <button>Cadastrar-se</button>
    </Container>
  );
}

export default Header;
