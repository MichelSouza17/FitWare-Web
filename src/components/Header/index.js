import { Container } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Header() {
  return (
    <Container>
      <img src={Imglogo} />
    </Container>
  );
}

export default Header;
