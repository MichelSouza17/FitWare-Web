import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  ContainerHome,
  TitleContainer,
  Title,
  ItemMenu,
  ContainerItensMenu,
  ContainerColuna,
  ItemMenuQRcode,
  FormNewPersonal,
  InfoTreino,
} from "./styles";

import { useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Link } from "react-router-dom";

import IconUser from "../../assets/iconUser.png";
import IconList from "../../assets/list.png";
import IconCadastro from "../../assets/cadastro.png";
import IconAulas from "../../assets/aula.png";
import IconDia from "../../assets/dia.png";
import IconAdmin from "../../assets/admin.png";
import IconMobile from "../../assets/mobile.png";

function NewPersonal() {
  return (
    <FormNewPersonal>
      <Input id="personal_name" label="Nome:" />

      <Input id="email" label="E-mail:" type="email" />

      <InfoTreino>
        <Input id="password" label="Senha:" type="password" />

        <Input id="confirmepassword" label="Confirmar Senha:" type="password" />
      </InfoTreino>
      <Select id="especiality" label="Especialidade:"></Select>
      <button>Enviar</button>
    </FormNewPersonal>
  );
}

function HomeAdmin() {
  const [showPersonal, setShowPersonal] = useState(false);
  return (
    <>
      {showPersonal && (
        <Modal
          title="Cadastrar Personal Trainer"
          handleClose={() => setShowPersonal(false)}
        >
          <NewPersonal />
        </Modal>
      )}
      <Header />
      <Container>
        <ContainerHome>
          <Title>
            <TitleContainer>
              <h4>Menu Principal</h4>
            </TitleContainer>
          </Title>
          <h3>Bem Vindo Ao Fitware!</h3>
          <ContainerItensMenu>
            <ContainerColuna>
              <Link to to="/aulas">
                <ItemMenu>
                  <img src={IconAulas} />
                  <h4>Aulas</h4>
                </ItemMenu>
              </Link>
              <Link to="/clientes">
                <ItemMenu>
                  <img src={IconList} />
                  <h4>Lista de Clientes</h4>
                </ItemMenu>
              </Link>
            </ContainerColuna>
            <ContainerColuna>
              <Link to="/register">
                <ItemMenu>
                  <img src={IconUser} />
                  <h4>Cadastrar Aluno</h4>
                </ItemMenu>
              </Link>
              <ItemMenu onClick={() => setShowPersonal(true)}>
                <img src={IconCadastro} />
                <h4>Cadastrar Personal Trainer</h4>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <Link to="/agendamentos">
                <ItemMenu>
                  <img src={IconDia} />
                  <h4>Agendamentos do dia</h4>
                </ItemMenu>
              </Link>
              <ItemMenu>
                <img src={IconAdmin} />
                <h4>Perfil</h4>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenuQRcode>
                <img src={IconMobile} />
                <h4>Compartilhe o APP com seus Clientes</h4>
              </ItemMenuQRcode>
            </ContainerColuna>
          </ContainerItensMenu>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default HomeAdmin;
