import {
    Container,
    ContainerUser,
    ContainerContacts,
    ContainerAddress,
    ContainerWeight,
    ContainerDice,
    TextAcademy,
    ContainerAcademy,
    FormUser,
    SelectAcademy,
    ContainerButtons,
    ButtonSave,
    ButtonCancel,
    ContainerInfo
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Select from "../../components/Select";

function Register() {
    return (
        <>
            <Header />
            <Container>
                <ContainerUser>
                    <h2>Cadastro Usuário</h2>
                    <FormUser>
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
                    </FormUser>
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
                <Input
                            id="cep"
                            label="Cep"
                            type="int"
                            // value={}
                            // handler={}
                        />
                        <Input
                            id="logradouro"
                            label="Logradouro"
                            type="text"
                            // value={}
                            // handler={}
                        />
                        <Input
                            id="numero"
                            label="Numero"
                            type="int"
                            // value={}
                            // handler={}
                        />
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
            </Container>
            <Footer />
        </>
    );
}

export default Register;
