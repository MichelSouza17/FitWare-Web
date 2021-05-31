// import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerAgendamentos,
  Title,
  Search,
  ButtonSearch,
  ContainerTable,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";

function Clients() {
  return (
    <>
      <Header />
      <Container>
        <ContainerAgendamentos>
          <Title>
            <h4>AGENDAMENTOS DO DIA</h4>
          </Title>
          <Search>
            <ButtonSearch>Buscar</ButtonSearch>
            <Input id="client" placeholder="Pesquisar Cliente" type="text" />
          </Search>
          <ContainerTable>
            <table>
              <tr>
                <th>
                  <h4>ID</h4>
                </th>
              </tr>
            </table>
          </ContainerTable>
        </ContainerAgendamentos>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
