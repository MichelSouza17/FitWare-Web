import { Container, ButtonsContainer, ButtonHome } from "./styles";

import Imglogo from "../../assets/fitware.png";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    history.push("/login");
  };
  return (
    <Container>
      <img src={Imglogo} />

      <ButtonsContainer>
        <ButtonHome onClick={handleSubmit}>
          <h5>Login</h5>
        </ButtonHome>
        <ButtonHome>
          <h5>Cadastre-se</h5>
        </ButtonHome>
      </ButtonsContainer>
    </Container>
  );
}

export default Header;
