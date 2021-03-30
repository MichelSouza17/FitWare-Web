import {
    Container,
    ContainerUser,
    ContainerContacts,
    ContainerAddress,
    ContainerWeight,
    ContainerDice,
    ContainerAcademy,
    FormUser,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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

                        <Input
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
                <ContainerDice>
                    <ContainerContacts>
                        <Input
                            id="name"
                            label="Primeiro Nome"
                            type="text"
                            // value={}
                            // handler={}
                        />
                        <Input
                            id="name"
                            label="Primeiro Nome"
                            type="text"
                            // value={}
                            // handler={}
                        />
                        <Input
                            id="name"
                            label="Primeiro Nome"
                            type="text"
                            // value={}
                            // handler={}
                        />
                        <Input
                            id="name"
                            label="Primeiro Nome"
                            type="text"
                            // value={}
                            // handler={}
                        />
                    </ContainerContacts>
                    <ContainerWeight></ContainerWeight>
                </ContainerDice>
                <ContainerAddress></ContainerAddress>
                {/* <ContainerAcademy></ContainerAcademy> */}
            </Container>
            <Footer />
        </>
    );
}

export default Register;
