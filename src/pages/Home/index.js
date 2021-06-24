import {
  Container,
  ContainerSlide,
  ContainerUnits,
  ContainerIntroduction,
  ContainerDescricao,
  ContainerFunctionalities,
  ContainerSupport,
  Contacts,
  CardUnit,
  Description,
  ContainerEmail,
  ContainerTelefone,
} from "./styles";

import Header from "../../components/HeaderHome";
import Footer from "../../components/Footer";
import IconAgenda from "../../assets/iconAgenda.png";
import IconControl from "../../assets/iconControl.png";
import IconHorario from "../../assets/iconHorario.png";
import IconAula from "../../assets/iconAula.png";
import IconRegras from "../../assets/iconRegras.png";
import IconGym from "../../assets/iconGym.png";
import IconAdmin from "../../assets/admin.svg";
import IconMobile from "../../assets/mobile.svg";
import exercicio from "../../assets/exercicio.gif";
import BackgroundVideo from "../../components/backgroundVideo/BackgroundVideo";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerSlide>
          <BackgroundVideo />
        </ContainerSlide>
        <ContainerUnits>
          <CardUnit>
            <img src={IconGym} alt="iconGym" />
            <h3>Agendamentos</h3>
            <p>
              O sistema de agendamento da FitWare é a parte mais importante do
              sistema, é o que fará o controle nas academias.
            </p>
          </CardUnit>
          <CardUnit>
            <img src={IconAdmin} alt="iconAdmin" />
            <h3>Administrador</h3>
            <p>
              O administrador terá poderá criar e excluir Agendamentos,
              cadastrar seus personal trainers e clientes na sua academia e
              supervisionar as aulas presenciais e onlines.
            </p>
          </CardUnit>
          <CardUnit>
            <img src={IconMobile} alt="iconMobile" />

            <h3>Clientes</h3>
            <p>
              Seus clientes poderam ver quais aulas estão disponiveis através do
              aplicativo mobile, aonde ele poderá cadastrar-se em aulas
              presenciais ou onlines
            </p>
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
            <img src={IconAgenda} alt="iconAgenda" />
            <h3>Agendamento</h3>
            <img src={IconControl} alt="iconControl" />
            <h3>Controle de Pessoas</h3>
            <img src={IconHorario} alt="iconHorario" />
            <h3>Horário</h3>
            <img src={IconAula} alt="iconAula" />
            <h3>Aulas Onlines</h3>
            <img src={IconRegras} alt="iconRegras" />
            <h3>Regras</h3>
          </ContainerFunctionalities>
        </ContainerIntroduction>
        <ContainerDescricao>
          <h2>Leve agora a FitWare para a sua academia !</h2>
          <p>
            A Addmeans pensou esse sistema em pró das pequenas academias que não
            possuem um sistema para controlar seu clientes,você pode assinar o
            termos e conseguir sua assinatura para utilizar o sistema e o nosso
            aplicativo que será direcionado para os clientes de sua academia.
          </p>
          <img src={exercicio} alt="imgExercicio" />
        </ContainerDescricao>
        <ContainerSupport>
          <h1>Contatos</h1>
          <Contacts>
            <ContainerEmail>
              <h3>Email</h3>
              <p>addmeans.support@gmail.com</p>
              <h3>Instagram</h3>
              <p>@AddMeans_Oficial</p>
            </ContainerEmail>
            <ContainerTelefone>
              <h3>Telefone</h3>
              <p> +55(11) 8008-5000</p>
              <h3>Endereço</h3>
              <p> Avenida Paulista, 1001</p>
              <p> São Paulo - SP</p>
            </ContainerTelefone>
          </Contacts>
        </ContainerSupport>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
