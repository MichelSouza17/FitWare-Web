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
import { useState } from "react";

function Register() {

    const [student, setStudent] = useStatete({
        id: "",
        name:"",
        surname:"",
        email:"",
        password:"",
        birthday:"",
        telefone:"",
        Weight:"",
        height:"",
        gender:"",
        state:"",
        city:"",
        street:"",
        cep:"",
    });

    const handleInput = (e) =>{
        setStudent({...student, [e.target.id]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const {id, name, surname, email, password, birthday, telefone, Weight, height, gender, state, city, street, cep} = UserAcademy;

            const response = await api.post("/UserAcademy",{
                id,
                name,
                surname,
                email,
                password,
                birthday,
                telefone,
                Weight,
                height,
                gender,
                state,
                city,
                street,
                cep,

            });

        }catch(error){
            console.error(error);
            alert(error.response.data.error);
        }
    };

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
            handler={handleInput}
            />
            <Input
              id="lastname"
              label="Sobrenome"
              type="text"
            // value={}
            handler={handleInput}
            />

            <Select
              id="sexo"
              label="Sexo"
              type="text"
            // value={}
            handler={handleInput}
            />
            <Input
              id="dataNascimento"
              label="Data de Nascimento"
              type="text"
            // value={}
            handler={handleInput}
            />
            <Input
              id="cpf"
              label="CPF"
              type="int"
            // value={}
            handler={handleInput}
            />
            <Input
              id="email"
              label="E-mail"
              type="text"
            // value={}
            handler={handleInput}
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
              handler={handleInput}
              />
              <Select
                id="tipo"
                label="Tipo"
                type="text"
              // value={}
              handler={handleInput}
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
                id="peso"
                label="Peso"
                type="double"
              // value={}
              handler={handleInput}
              />
              <Input
                id="altura"
                label="Altura"
                type="double"
              // value={}
              handler={handleInput}
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
              handler={handleInput}
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
            handler={handleInput}
            />
            <Numero>
              <Input
                id="numero"
                label="Numero"
                type="int"
              // value={}
              handler={handleInput}
              />
            </Numero>
            <Input
              id="Bairro"
              label="Bairro"
              type="text"
            // value={}
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
            handler={handleInput}
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
