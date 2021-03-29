import {
    Container,
    Header,
    ContainerUser,
    ContainerContacts,
    ContainerAddress,
} from "./styles";

function Register() {
    return (
        <>
            <Container>
                <ContainerUser></ContainerUser>
                <ContainerContacts></ContainerContacts>
                <ContainerAddress></ContainerAddress>
            </Container>
            <Header>
                    <h2>
                        @Copyright 2021 todos os direitos reservados - Política
                        de Privacidade
                    </h2>
                </Header>
        </>
    );
}

export default Register;
