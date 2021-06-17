import {
  ContainerGeral,
  FormContainer,
  ContainerAcademy,
  ContainerAddress,
  Academy,
  ContainerButtons,
  ButtonSave,
  ButtonCancel,
  Cep,
  ContainerPassword,
  Bairro,
  Neighborhood,
  Citys,
  Menu,
  Street,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { api } from "../../services/api";
import { buscarViaCep } from "../../services/viaCep";
import { maskCep, maskCel } from "../../utils/masks";
import { useHistory } from "react-router-dom";
import MenuLateral from "../../components/MenuLateral";

import Imglogo from "../../assets/menu.png";

function RegisterAcademy() {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const [academy, setAcademy] = useState({
    name: "",
    cnpj: "",
    telefone: "",
    email: "",
    password: "",
    cep: "",
    street: "",
    numero: "",
    state: "",
    city: "",
    confirmePassword: "",
  });

  const confirmePassword = () => academy.password === academy.confirmePassword;

  const buttonDisabled = () => {
    const { name, cnpj, telefone, email, cep, numero, password } = academy;

    if (
      !name ||
      !cnpj ||
      !telefone ||
      !email ||
      !cep ||
      !numero ||
      !password ||
      !confirmePassword()
    )
      return true;

    return false;
  };

  const handleInput = (e) => {
    setAcademy({ ...academy, [e.target.id]: e.target.value });
  };

  const handleCep = async (e) => {
    let cep = maskCep(e.target.value);

    if (cep.length === 9) {
      const response = await buscarViaCep(cep);

      setAcademy({
        ...academy,
        [e.target.id]: cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
      });
    } else {
      setAcademy({ ...academy, [e.target.id]: cep });
    }
  };

  const handleCel = (e) => {
    let telefone = maskCel(e.target.value);

    setAcademy({ ...academy, [e.target.id]: e.target.value, telefone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmePassword()) return alert("As senhas precisam ser iguais!");

    try {
      const response = await api.post("/academy", {
        name: academy.name,
        cnpj: academy.cnpj,
        telefone: academy.telefone,
        email: academy.email,
        password: academy.password,
        cep: academy.cep,
        street: academy.logradouro,
        number: academy.numero,
        state: academy.uf,
        city: academy.localidade,
      });

      history.push("/login");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <ContainerGeral>
        <FormContainer onClick={() => (showMenu ? setShowMenu(false) : "")}>
          <ContainerAcademy>
            <h1>Cadastre sua Academia</h1>
            <Academy>
              <Input
                id="name"
                label="Nome Academia"
                type="text"
                value={academy.name}
                handler={handleInput}
              />
              <Input
                id="email"
                label="E-mail"
                type="email"
                value={academy.email}
                handler={handleInput}
              />

              <Input
                id="telefone"
                label="Telefone"
                type="text"
                placeholder="(11)99999-9999"
                maxLength="15"
                value={academy.telefone}
                handler={handleCel}
              />
              <Input
                id="cnpj"
                label="CNPJ"
                type="text"
                maxLength="18"
                value={academy.cnpj}
                handler={handleInput}
              />
            </Academy>
          </ContainerAcademy>
          <ContainerAddress>
            <h1>Endereço</h1>
            <Cep>
              <Input
                id="cep"
                label="CEP"
                type="text"
                maxLength="9"
                value={academy.cep}
                handler={handleCep}
                required
              />
            </Cep>
            <Street>
              <Neighborhood>
                <Input
                  id="logradouro"
                  label="Logradouro"
                  type="text"
                  value={academy.logradouro}
                />
              </Neighborhood>
              <Bairro>
                <Input
                  id="street"
                  label="Bairro"
                  type="text"
                  value={academy.bairro}
                />
              </Bairro>
            </Street>
            <Citys>
              <Input
                id="numero"
                label="Numero"
                type="number"
                value={academy.numero}
                handler={handleInput}
              />
              <Input
                id="cidade"
                label="Cidade"
                type="int"
                value={academy.localidade}
              />
              <Input id="estado" label="Estado" type="int" value={academy.uf} />
            </Citys>
          </ContainerAddress>
          <ContainerPassword>
            <Input
              id="password"
              label="Senha"
              type="password"
              value={academy.password}
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
              value={academy.confirmePassword}
              handler={handleInput}
            />
          </ContainerPassword>
          <ContainerButtons onSubmit={handleSubmit}>
            <ButtonSave disabled={buttonDisabled()}>Salvar</ButtonSave>
            <ButtonCancel>Cancelar</ButtonCancel>
          </ContainerButtons>
          <h4>*Todos os campos são obrigatórios</h4>
        </FormContainer>
      </ContainerGeral>
      <Footer />
    </>
  );
}

export default RegisterAcademy;
