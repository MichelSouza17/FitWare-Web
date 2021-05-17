import Header from "../../components/Header";
import { Container, ContainerAgendamentos, Title } from "./styles";

function Agendamentos() {
  return (
    <>
      <Header />
      <Container>
        <ContainerAgendamentos>
          <Title>
            <h4>AGENDAMENTOS</h4>
          </Title>
        </ContainerAgendamentos>
      </Container>
    </>
  );
}

export default Agendamentos;
