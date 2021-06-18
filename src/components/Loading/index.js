import { Container } from "./styles";

import imgLoading from "../../assets/iconLoading.png";

function Loading() {
  return (
    <Container>
      <img src={imgLoading} />
      Carregando...
    </Container>
  );
}

export default Loading;
