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
    ContainerPassword,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";
import Modal from "../../components/Modal";
import { useState } from "react";
import { api } from "../../services/api";

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
        cpf: "",
    });

    const [showCep, setShowCep] = useState(false);

    const confirmePassword = () => userStudent.password === userStudent.validPassword ? true : false ;

    const handleInput = (e) => {
        setUserStudent({ ...userStudent, [e.target.id]: e.target.value });
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
            {showCep && (
                <Modal
                    title="Faça a busca de seu endereço pelo CEP"
                    handleClose={() => setShowCep(false)}
                ></Modal>
            )}
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
                                label="Cep"
                                type="int"
                                value={userStudent.cep}
                                handler={handleInput}
                            />
                            <ButtonCep onClick={() => setShowCep(true)}>
                                <h3>Não sei meu CEP</h3>
                            </ButtonCep>
                        </Cep>
                        <Input
                            id="logradouro"
                            label="Logradouro"
                            type="text"
                            // value={userStudent}
                            // handler={handleInput}
                        />
                        <Numero>
                            <Input
                                id="numero"
                                label="Numero"
                                type="int"
                                value={userStudent.numero}
                                handler={handleInput}
                            />
                        </Numero>
                        <Input
                            id="street"
                            label="Bairro"
                            type="text"
                            value={userStudent.street}
                            handler={handleInput}
                        />
                    </ContainerAddress>
                </ContainerInfo>
                <ContainerAcademy>
                    <TextAcademy>
                        <p>
                            Selecione a academia onde o usuário será vinculado
                        </p>
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
