import { Container } from "./styles";

import imgLoading from "../../assets/iconLoading.png";

function Loading() {
  return (
    <Container>
      <img src={imgLoading} alt="loading" />
      Carregando...
    </Container>
  );
}

export default Loading;
