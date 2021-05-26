import Header from "../../components/Header";
import {
  Container,
  ContainerAulas,
  Title,
  ContainerTable,
  ContainerAbas,
  Abas,
  ButtonAula,
  InsertAula,
  Functions,
} from "./styles";
import Footer from "../../components/Footer";

function Aulas() {
  return (
    <>
      <Header />
      <Container>
        <ContainerAulas>
          <Title>
            <h4>AULAS</h4>
          </Title>
          <Functions>
            <ContainerAbas>
              <Abas>
                <h4>Presenciais</h4>
              </Abas>
              <Abas>
                <h4>Onlines</h4>
              </Abas>
            </ContainerAbas>
            <InsertAula>
              <h3>Nova Aula</h3>
              <ButtonAula>
                <h2>+</h2>
              </ButtonAula>
            </InsertAula>
          </Functions>
          <ContainerTable></ContainerTable>
        </ContainerAulas>
      </Container>
      <Footer />
    </>
  );
}

export default Aulas;
