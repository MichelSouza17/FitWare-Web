import {
  FormContainer,
  ContainerUser,
  ContainerContacts,
  ContainerAddress,
  ContainerWeight,
  ContainerDice,
  TextAcademy,
  ContainerAcademy,
  User,
  SelectAcademy,
  ContainerButtons,
  ButtonSave,
  ButtonCancel,
  ContainerInfo,
  Cep,
  ButtonCep,
  Numero
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

function Register() {
  return (
    <>
      <Header />
      <FormContainer>
        <ContainerUser>
          <h1>Cadastro Usuário</h1>
          <User>
            <Input
              id="name"
              label="Primeiro Nome"
              type="text"
            // value={}
            // handler={}
            />
            <Input
              id="lastname"
              label="Sobrenome"
              type="text"
            // value={}
            // handler={}
            />

            <Select
              id="sexo"
              label="Sexo"
              type="text"
            // value={}
            // handler={}
            />
            <Input
              id="dataNascimento"
              label="Data de Nascimento"
              type="text"
            // value={}
            // handler={}
            />
            <Input
              id="cpf"
              label="CPF"
              type="int"
            // value={}
            // handler={}
            />
            <Input
              id="email"
              label="E-mail"
              type="text"
            // value={}
            // handler={}
            />
          </User>
        </ContainerUser>
        <ContainerInfo>
          <ContainerDice>
            <ContainerContacts>
              <Input
                id="celular"
                label="Celular"
                type="int"
              // value={}
              // handler={}
              />
              <Select
                id="tipo"
                label="Tipo"
                type="text"
              // value={}
              // handler={}
              />
              <Select
                id="estado"
                label="Estado"
                type="text"
              // value={}
              // handler={}
              />
            </ContainerContacts>
            <ContainerWeight>
              <Input
                id="peso"
                label="Peso"
                type="double"
              // value={}
              // handler={}
              />
              <Input
                id="altura"
                label="Altura"
                type="double"
              // value={}
              // handler={}
              />
            </ContainerWeight>
          </ContainerDice>
          <ContainerAddress>
            <Cep>
              <Input
                id="cep"
                label="Cep"
                type="int"
              // value={}
              // handler={}
              />
              <ButtonCep>
                <h3>Não sei meu CEP</h3>
              </ButtonCep>
            </Cep>
            <Input
              id="logradouro"
              label="Logradouro"
              type="text"
            // value={}
            // handler={}
            />
            <Numero>
              <Input
                id="numero"
                label="Numero"
                type="int"
              // value={}
              // handler={}
              />
            </Numero>
            <Input
              id="Bairro"
              label="Bairro"
              type="text"
            // value={}
            // handler={}
            />
          </ContainerAddress>
        </ContainerInfo>
        <ContainerAcademy>
          <TextAcademy>
            <p>Selecione a academia onde o usuário será vinculado</p>
          </TextAcademy>
          <SelectAcademy>
            <Select
              id="academia"
              type="text"
            // value={}
            // handler={}
            />
          </SelectAcademy>
        </ContainerAcademy>
        <ContainerButtons>
          <ButtonSave>Salvar</ButtonSave>
          <ButtonCancel>Cancelar</ButtonCancel>
        </ContainerButtons>
      </FormContainer>
      <Footer />
    </>
  );
}

export default Register;
