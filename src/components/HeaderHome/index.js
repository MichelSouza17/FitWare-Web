import { Container, ButtonsContainer, ButtonHome } from "./styles";

import Imglogo from "../../assets/fitware.png";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const handleSubmitLogin = async (e) => {
    history.push("/login");
  };

  const handleSubmitAcademy = async (e) => {
    history.push("/registerAcademy");
  };

  return (
    <>
      <Container>
        <img src={Imglogo} alt="logo" />
        <ButtonsContainer>
          <ButtonHome onClick={handleSubmitLogin}>
            <h5>Login</h5>
          </ButtonHome>
          <ButtonHome onClick={handleSubmitAcademy}>
            <h5>Cadastre-se</h5>
          </ButtonHome>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default Header;
