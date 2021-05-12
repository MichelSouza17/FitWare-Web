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
import { maskCep, maskCel, maskCpf } from "../../utils/masks";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [userStudent, setUserStudent] = useState({
    first_name: "",
    surname: "",
    email: "",
    password: "",
    birth_date: "",
    celular: "",
    weight: "",
    numero: "",
    height: "",
    state: "",
    city: "",
    street: "",
    cep: "",
    confirmePassword: "",
    cpf: "",
  });

  const confirmePassword = () =>
    userStudent.password === userStudent.confirmePassword;

  const buttonDisabled = () => {
    const {
      first_name,
      surname,
      email,
      password,
      birth_date,
      celular,
      weight,
      numero,
      height,
      cep,
      cpf,
    } = userStudent;

    if (
      !first_name ||
      !surname ||
      !email ||
      !password ||
      !birth_date ||
      !celular ||
      !weight ||
      !numero ||
      !height ||
      !cep ||
      !cpf ||
      !confirmePassword()
    )
      return true;

    return false;
  };

  const handleInput = (e) => {
    setUserStudent({ ...userStudent, [e.target.id]: e.target.value });
  };

  const handleCpf = (e) => {
    let cpf = maskCpf(e.target.value);

    setUserStudent({ ...userStudent, [e.target.id]: e.target.value, cpf });
  };

  const handleCel = (e) => {
    let celular = maskCel(e.target.value);

    setUserStudent({ ...userStudent, [e.target.id]: e.target.value, celular });
  };

  const handleCep = async (e) => {
    let cep = maskCep(e.target.value);

    if (cep.length === 9) {
      const response = await buscarViaCep(cep);

      setUserStudent({
        ...userStudent,
        [e.target.id]: cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
      });
    } else {
      setUserStudent({ ...userStudent, [e.target.id]: cep });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmePassword()) return alert("As senhas precisam ser iguais!");

    try {
      const response = await api.post("/userAcademy", {
        first_name: userStudent.first_name,
        surname: userStudent.surname,
        email: userStudent.email,
        password: userStudent.password,
        birth_date: userStudent.birth_date,
        celular: userStudent.celular,
        weight: userStudent.weight,
        numero: userStudent.numero,
        height: userStudent.height,
        state: userStudent.uf,
        city: userStudent.localidade,
        street: userStudent.logradouro,
        cep: userStudent.cep,
        cpf: userStudent.cpf,
      });

      history.push("/");
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
              type="int"
              // value={userStudent.sexo}
              // handler={handleInput}
            />
            <Input
              id="birth_date"
              label="Data de Nascimento"
              type="date"
              value={userStudent.birth_date}
              handler={handleInput}
            />
            <Input
              id="cpf"
              label="CPF"
              type="text"
              maxLength="14"
              value={userStudent.cpf}
              handler={handleCpf}
            />
            <Input
              id="email"
              label="E-mail"
              type="email"
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
                type="text"
                placeholder="(11)99999-9999"
                maxLength="15"
                value={userStudent.celular}
                handler={handleCel}
              />
              <Select
                id="tipo"
                label="Tipo"
                type="int"
                // value={}
                // handler={handleInput}
              />
            </ContainerContacts>
            <ContainerWeight>
              <Input
                id="weight"
                label="Peso"
                placeholder="000"
                type="double"
                maxLength="3"
                value={userStudent.weight}
                handler={handleInput}
              />
              <Input
                id="height"
                label="Altura"
                type="double"
                placeholder="0,00"
                maxLength="4"
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
            />
            <Neighborhood>
              <Bairro>
                <Input
                  id="street"
                  label="Bairro"
                  type="text"
                  value={userStudent.bairro}
                />
              </Bairro>
              <Numero>
                <Input
                  id="numero"
                  label="Numero"
                  type="number"
                  value={userStudent.numero}
                  handler={handleInput}
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
              />
              <Input
                id="estado"
                label="Estado"
                type="int"
                value={userStudent.uf}
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
              type="int"
              // value={}
              // handler={handleInput}
            />
          </SelectAcademy>
        </ContainerAcademy>
        <ContainerPassword>
          <Input
            id="password"
            label="Senha"
            type="password"
            value={userStudent.password}
            handler={handleInput}
          />
          <Input
            id="confirmePassword"
            label="Confirme sua Senha"
            type="password"
            onBlur={(e) => {
              if (!confirmePassword()) alert("As senhas precisam ser iguais");
              e.target.focus();
            }}
            value={userStudent.confirmePassword}
            handler={handleInput}
          />
        </ContainerPassword>
        <ContainerButtons onSubmit={handleSubmit}>
          <ButtonSave disabled={buttonDisabled()}>Salvar</ButtonSave>
          <ButtonCancel>Cancelar</ButtonCancel>
        </ContainerButtons>
      </FormContainer>
      <Footer />
    </>
  );
}

export default Register;
