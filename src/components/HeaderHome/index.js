import { Container, ButtonsHome } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Header() {
  return (
    <Container>
      <img src={Imglogo} />

      <ButtonsHome>Login</ButtonsHome>
      <ButtonsHome>Cadastrar-se</ButtonsHome>
    </Container>
  );
}

export default Header;
