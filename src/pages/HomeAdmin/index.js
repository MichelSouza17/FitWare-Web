import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, ContainerHome, TitleContainer, Title } from "./styles";

function HomeAdmin() {
  return (
    <>
      <Header />
      <Container>
        <ContainerHome>
          <Title>
            <TitleContainer>
              <h4>Menu Principal</h4>
            </TitleContainer>
          </Title>
          <h3>Bem Vindo Ao Fitware!</h3>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default HomeAdmin;
