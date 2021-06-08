import {
  ContainerGeral,
  FormContainer,
  ContainerAcademy,
  ContainerAddress,
  Academy,
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
  Menu,
  Street
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";
import { useState } from "react";
// import { api } from "../../services/api";
// import { buscarViaCep } from "../../services/viaCep";
// import { maskCep, maskCel, maskCpf } from "../../utils/masks";
// import { useHistory } from "react-router-dom";
import MenuLateral from "../../components/MenuLateral";

import Imglogo from "../../assets/menu.png";

function RegisterAcademy() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header />
      <ContainerGeral>
      {showMenu && (
        <MenuLateral />
      )}
        <Menu>
        <img src={Imglogo} onClick={() => setShowMenu(true)}/>
        </Menu>
        <FormContainer onClick={() => showMenu ? setShowMenu(false): ""}>
          <ContainerAcademy>
            <h1>Cadastre sua Academia</h1>
            <Academy>
              <Input
                id="name_academy"
                label="Nome Academia"
                type="text"
              />
              <Input
                id="email"
                label="E-mail"
                type="email"
              />

              <Input
                id="telefone"
                label="Telefone"
                type="text"
              />
              <Input
                id="cnpj"
                label="CNPJ"
                type="text"
                maxLength="14"
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
                />
              </Cep>
              <Street>
              <Neighborhood>
              <Input
                id="logradouro"
                label="Logradouro"
                type="text"
              />
              </Neighborhood>
                <Bairro>
                  <Input
                    id="street"
                    label="Bairro"
                    type="text"
                  />
                </Bairro>
                </Street>
              <Citys>
                  <Input
                    id="numero"
                    label="Numero"
                    type="number"
                  />
                <Input
                  id="cidade"
                  label="Cidade"
                  type="int"
                />
                <Input
                  id="estado"
                  label="Estado"
                  type="int"
                />
              </Citys>
            </ContainerAddress>
          <ContainerPassword>
            <Input
              id="password"
              label="Senha"
              type="password"
            />
            <Input
              id="confirmePassword"
              label="Confirme sua Senha"
              type="password"
            />
          </ContainerPassword>
          <ContainerButtons>
            <ButtonSave>Salvar</ButtonSave>
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
