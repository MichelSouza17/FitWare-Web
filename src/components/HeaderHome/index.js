import { Container, ButtonsContainer, ButtonHome } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Header() {
  return (
    <Container>
      <img src={Imglogo} />

      <ButtonsContainer>
        <ButtonHome><h5>Login</h5></ButtonHome>
        <ButtonHome><h5>Cadastre-se</h5></ButtonHome>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
