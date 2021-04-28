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
  Numero,
  ContainerPassword,
  Bairro,
  Neighborhood,
  Citys,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";
import { useState } from "react";
import { api } from "../../services/api";
import { buscarViaCep } from "../../services/viaCep";

function Register() {
  const [userStudent, setUserStudent] = useState({
    first_name: "",
    surname: "",
    email: "",
    password: "",
    validPassword: "",
    birthdate: "",
    celular: "",
    weight: "",
    numero: "",
    height: "",
    state: "",
    city: "",
    street: "",
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    cpf: "",
  });

  const confirmePassword = () =>
    userStudent.password === userStudent.validPassword ? true : false;

  const handleInput = (e) => {
    setUserStudent({ ...userStudent, [e.target.id]: e.target.value });
  };

  const handleCep = async (e) => {
    const cep = e.target.value;

    if (cep.length === 9) {
      const response = await buscarViaCep(cep);

      //aqui é o ponto onde você tem a resposta da api
      //os seus campos do input estão ligados às variáveis de estado

      //então basta você colocar o retorno da api nas variáveis de estados através do SET

      setUserStudent({ ...userStudent, [e.target.id]: cep, logradouro: response.data.logradouro, bairro: response.data.bairro, localidade: response.data.localidade, uf: response.data.uf });
    } else {
      setUserStudent({ ...userStudent, [e.target.id]: cep });
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/UserAcademy", {
        first_name: userStudent.first_name,
        surname: userStudent.surname,
        email: userStudent.email,
        password: userStudent.password,
        birthdate: userStudent.birthdate,
        celular: userStudent.celular,
        weight: userStudent.weight,
        numero: userStudent.numero,
        height: userStudent.height,
        state: userStudent.state,
        city: userStudent.city,
        street: userStudent.street,
        cep: userStudent.cep,
        cpf: userStudent.cpf,
      });
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <FormContainer>
        <ContainerUser>
          <h1>Dados Pessoais</h1>
          <User>
            <Input
              id="first_name"
              label="Primeiro Nome"
              type="text"
              value={userStudent.first_name}
              handler={handleInput}
            />
            <Input
              id="surname"
              label="Sobrenome"
              type="text"
              value={userStudent.surname}
              handler={handleInput}
            />

            <Select
              id="sexo"
              label="Sexo"
              type="text"
            // value={userStudent.sexo}
            // handler={handleInput}
            />
            <Input
              id="birthdate"
              label="Data de Nascimento"
              type="text"
              value={userStudent.birthdate}
              handler={handleInput}
            />
            <Input
              id="cpf"
              label="CPF"
              type="int"
              value={userStudent.cpf}
              handler={handleInput}
            />
            <Input
              id="email"
              label="E-mail"
              type="text"
              value={userStudent.email}
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
                value={userStudent.celular}
                handler={handleInput}
              />
              <Select
                id="tipo"
                label="Tipo"
                type="text"
              // value={}
              // handler={handleInput}
              />
            </ContainerContacts>
            <ContainerWeight>
              <Input
                id="weight"
                label="Peso"
                type="double"
                value={userStudent.weight}
                handler={handleInput}
              />
              <Input
                id="height"
                label="Altura"
                type="double"
                value={userStudent.height}
                handler={handleInput}
              />
            </ContainerWeight>
          </ContainerDice>
          <ContainerAddress>
            <h1>Endereço</h1>
            <Cep>
              <Input
                id="cep"
                label="CEP"
                type="text"
                maxLength="9"
                value={userStudent.cep}
                handler={handleCep}
                required
              />
            </Cep>
            <Input
              id="logradouro"
              label="Logradouro"
              type="text"
              value={userStudent.logradouro}
              required
            />
            <Neighborhood>
              <Bairro>
                <Input
                  id="street"
                  label="Bairro"
                  type="text"
                  value={userStudent.bairro}
                  required
                />
              </Bairro>
              <Numero>
                <Input
                  id="numero"
                  label="Numero"
                  type="int"
                  value={userStudent.numero}
                  required

                />
              </Numero>
            </Neighborhood>
            <Citys>
              <Input
                id="cidade"
                label="Cidade"
                type="int"
                value={userStudent.localidade}
                required
              />
              <Input
                id="estado"
                label="Estado"
                type="int"
                value={userStudent.uf}
                required
              />
            </Citys>
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
        <ContainerPassword>
          <Input
            id="password"
            label="Senha"
            type="text"
            value={userStudent.password}
            handler={handleInput}
          />
          <Input
            id="validPassword"
            label="Confirme sua Senha"
            type="text"
            value={userStudent.validPassword}
            handler={handleInput}
          />
        </ContainerPassword>
        <ContainerButtons onSubmit={handleSubmit}>
          <ButtonSave disabled={confirmePassword}>Salvar</ButtonSave>
          <ButtonCancel>Cancelar</ButtonCancel>
        </ContainerButtons>
      </FormContainer>
      <Footer />
    </>
  );
}

export default Register;
