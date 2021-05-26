import { Container, ButtonsContainer, ButtonHome } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Header() {
  return (
    <Container>
      <img src={Imglogo} />

      <ButtonsContainer>
        <ButtonHome>Login</ButtonHome>
        <ButtonHome>cadastre-se</ButtonHome>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
