import {
  Container,
  ContainerSlide,
  ContainerUnits,
  ContainerIntroduction,
  ContainerFunctionalities,
  ContainerBranco,
  ContainerSupport,
  Contacts,
  CardUnit,
  Description,
} from "./styles";

import Header from "../../components/HeaderHome";
import Footer from "../../components/Footer";
import IconAgenda from "../../assets/iconAgenda.png";
import IconControl from "../../assets/iconControl.png";
import IconHorario from "../../assets/iconHorario.png";
import IconAula from "../../assets/iconAula.png";
import IconRegras from "../../assets/iconRegras.png";
import IconGym from "../../assets/iconGym.png";
import exercicio from "../../assets/exercicio.gif";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerSlide></ContainerSlide>
        <ContainerUnits>
          <CardUnit>
            <img src={IconGym} />
          </CardUnit>
          <CardUnit>
            <img src={IconGym} />
          </CardUnit>
          <CardUnit>
            <img src={IconGym} />
          </CardUnit>
        </ContainerUnits>
        <ContainerIntroduction>
          <Description>
            <h1>O que é o FitWare?</h1>
            <p>
              É um sistema para academias para ajudar a administrar a academia
              da melhor forma possivel
            </p>
          </Description>
          <ContainerFunctionalities>
            <img src={IconAgenda} />
            <h3>Agendamento</h3>
            <img src={IconControl} />
            <h3>Controle de Pessoas</h3>
            <img src={IconHorario} />
            <h3>Horário</h3>
            <img src={IconAula} />
            <h3>Aulas Onlines</h3>
            <img src={IconRegras} />
            <h3>Regras</h3>
          </ContainerFunctionalities>
        </ContainerIntroduction>
        <ContainerBranco>
          <h2>Leve agora a FitWare para a sua academia !</h2>
          <p>
            A Addmeans pensou esse sistema em pró das pequenas academias que não
            possuem um sistema para controlar seu clientes,você pode assinar o
            termos e conseguir sua assinatura para utilizar o sistema e o nosso
            aplicativo que será direcionado para os clientes de sua academia.
          </p>
          <img src={exercicio} />
          <button>Saber Mais</button>
        </ContainerBranco>
        <ContainerSupport>
          <h1>Suporte</h1>
          <Contacts>
            <h3>Email</h3>
            <p>addmeans.support@gmail.com</p>
            <h3>Telefone</h3>
            <p> +55(11) 8008-5000</p>
          </Contacts>
        </ContainerSupport>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
