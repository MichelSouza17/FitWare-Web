import { useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerClients,
  Title,
  Search,
  ButtonSearch,
  ContainerTable,
  Ids,
  Table,
  Informations,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import { getUser } from "../../services/security";

function Clients() {
  const [userStudent, setUsersStudent] = useState(getUser());

  return (
    <>
      <Header />
      <Container>
        <ContainerClients>
          <Title>
            <h4>CLIENTES</h4>
          </Title>
          <Search>
            <ButtonSearch>Buscar</ButtonSearch>
            <Input id="client" placeholder="Pesquisar Cliente" type="text" />
          </Search>
          <ContainerTable>
            <Table>
              <Ids>
                <h4>ID</h4>
              </Ids>
              <Informations>
                <h4>Nome</h4>
                {userStudent.name}
              </Informations>
              <Informations>
                <h4>E-Mail</h4>
                {userStudent.email}
              </Informations>
              <Informations>
                <h4>Celular</h4>
              </Informations>
              <Informations>
                <h4>Ações</h4>
              </Informations>
            </Table>
          </ContainerTable>
        </ContainerClients>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
