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
  Numero,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";
import Modal from "../../components/Modal";
import { useState } from "react";
import { api } from "../../services/api";

function Register() {
  const [Userstudent, setUserStudent] = useState({
    first_name: "",
    surname: "",
    email: "",
    password: "",
    birthdate: "",
    celular: "",
    weight: "",
    numero: "",
    height: "",
    state: "",
    city: "",
    street: "",
    cep: "",
    cpf: "",
  });

  const [showCep, setShowCep] = useState(false);

  const handleInput = (e) => {
    setUserStudent({ ...Userstudent, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/UserAcademy", {
        
        first_name: Userstudent.first_name,
        surname: Userstudent.surname,
        email: Userstudent.email,
        password: Userstudent.password,
        birthdate: Userstudent.birthdate,
        celular: Userstudent.celular,
        weight: Userstudent.weight,
        numero: Userstudent.numero,
        height: Userstudent.height,
        state: Userstudent.state,
        city: Userstudent.city,
        street: Userstudent.street,
        cep: Userstudent.cep,
        cpf: Userstudent.cpf,
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
    {showCep && (
        <Modal
          title="Faça a busca de seu endereço pelo CEP"
          handleClose={() => setShowCep(false)}
        >
        </Modal>
      )}
      <Header />
      <FormContainer onSubmit={handleSubmit}>
        <ContainerUser>
          <h1>Dados Pessoais</h1>
          <User>
            <Input
              id="first_name"
              label="Primeiro Nome"
              type="text"
              value={Userstudent.first_name}
              handler={handleInput}
            />
            <Input
              id="surname"
              label="Sobrenome"
              type="text"
              value={Userstudent.surname}
              handler={handleInput}
            />

            <Select
              id="sexo"
              label="Sexo"
              type="text"
              // value={Userstudent.sexo}
              // handler={handleInput}
            />
            <Input
              id="birthdate"
              label="Data de Nascimento"
              type="text"
              value={Userstudent.birthdate}
              handler={handleInput}
            />
            <Input
              id="cpf"
              label="CPF"
              type="int"
              value={Userstudent.cpf}
              handler={handleInput}
            />
            <Input
              id="email"
              label="E-mail"
              type="text"
              value={Userstudent.email}
              handler={handleInput}
            />
          </User>
        </ContainerUser>
        <ContainerInfo>
          <ContainerDice>
            <ContainerContacts>
              <h1>Contato</h1>
              <Input
                id="celular"
                label="Celular"
                type="int"
                value={Userstudent.celular}
                handler={handleInput}
              />
              <Select
                id="tipo"
                label="Tipo"
                type="text"
                // value={}
                // handler={handleInput}
              />
              <Select
                id="estado"
                label="Estado"
                type="text"
                // value={}
                handler={handleInput}
              />
            </ContainerContacts>
            <ContainerWeight>
              <Input
                id="weight"
                label="Peso"
                type="double"
                value={Userstudent.weight}
                handler={handleInput}
              />
              <Input
                id="height"
                label="Altura"
                type="double"
                value={Userstudent.height}
                handler={handleInput}
              />
            </ContainerWeight>
          </ContainerDice>
          <ContainerAddress>
            <h1>Endereço</h1>
            <Cep>
              <Input
                id="cep"
                label="Cep"
                type="int"
                value={Userstudent.cep}
                handler={handleInput}
              />
              <ButtonCep  onClick={() => setShowCep(true)}>
                <h3>Não sei meu CEP</h3>
              </ButtonCep>
            </Cep>
            <Input
              id="logradouro"
              label="Logradouro"
              type="text"
              // value={Userstudent}
              // handler={handleInput}
            />
            <Numero>
              <Input
                id="numero"
                label="Numero"
                type="int"
                value={Userstudent.numero}
                handler={handleInput}
              />
            </Numero>
            <Input
              id="street"
              label="Bairro"
              type="text"
              value={Userstudent.street}
              handler={handleInput}
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
              // handler={handleInput}
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
