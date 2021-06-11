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

import IconUser from "../../assets/iconUser.png";

function NewPersonal() { 
  return (
    <FormNewPersonal>
      <Input
        id="personal_name"
        label="Nome:"
      />

      <Input
          id="email"
          label="E-mail:"
          type="email"
        />

      <InfoTreino>
        <Input
          id="password"
          label="Senha:"
          type="password"
        />

        <Input
          id="confirmepassword"
          label="Confirmar Senha:"
          type="password"
        />
      </InfoTreino>
      <Select
        id="especiality"
        label="Especialidade:"
      >
      </Select>
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
              <ItemMenu></ItemMenu>
              <ItemMenu></ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu></ItemMenu>
              <ItemMenu onClick={() => setShowPersonal(true)}>
                <img src={IconUser} />
                <h3>Cadastrar Personal Trainer</h3>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu></ItemMenu>
              <ItemMenu></ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenuQRcode></ItemMenuQRcode>
            </ContainerColuna>
          </ContainerItensMenu>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default HomeAdmin;
