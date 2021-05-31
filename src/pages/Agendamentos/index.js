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
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";

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
                <th rowSpan="2">
                  <h4>Presencial</h4>
                </th>
                <td>
                  <h4>Aula: Zumba</h4>
                </td>
                <td>
                  <h4>Cadastrados: 23/40</h4>
                </td>
                <td>
                  <h4>31/05/2021</h4>
                </td>
                <td rowSpan="2">
                  <h3>Opção</h3>
                  <img src={ImgDelete} />
                  <img src={ImgEdit} />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Professor(a): Lucas Mendes</h4>
                </td>
                <td>
                  <h4>Duração: 3 horas</h4>
                </td>
                <td>
                  <h4>13:55</h4>
                </td>
              </tr>
              <tr>
                <th rowSpan="2">
                  <h4>Online</h4>
                </th>
                <td>
                  <h4>Aula: Zumba</h4>
                </td>
                <td>
                  <h4>Cadastrados: 23/40</h4>
                </td>
                <td>
                  <h4>31/05/2021</h4>
                </td>
                <td rowSpan="2">
                  <h3>Opção</h3>
                  <img src={ImgDelete} />
                  <img src={ImgEdit} />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Professor(a): Lucas Mendes</h4>
                </td>
                <td>
                  <h4>Duração: 3 horas</h4>
                </td>
                <td>
                  <h4>13:55</h4>
                </td>
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
