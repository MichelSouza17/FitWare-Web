import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerClients,
  Title,
  Search,
  ButtonSearch,
  ContainerTable,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";

function Clients(users) {
  //a api retorna uma lista.. então isso deve ser uma lista vazia no começo
  const [userStudents, setUserStudents] = useState([]);

  //precisamos colocar tudo isso dentro de uma função async depois chamar ela
  useEffect(() => {
    const loadStudents = async () => {
      try {
        //aqui consumimos a api, sempre dentro de um try catch
        const response = await api.get("/userAcademy");

        //dentro de response tem o data, que é o corpo da resposta
        //que contém a lista, colocamos ela no state
        // assim, que inicia vazio ne. isso, inicia vazio, depois substitui quando houver resposta.blz

        console.log(response.data);
        setUserStudents(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadStudents();
  }, []);

  //agora já temos a lista em mãos... só percorrer e mostrar na tela.

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
            <table>
              <tr>
                <th>
                  <h4>ID</h4>
                </th>
                <th>
                  <h4>Nome</h4>{" "}
                </th>
                <th>
                  <h4>E-Mail</h4>
                </th>
                <th>
                  <h4>Celular</h4>
                </th>
                <th>
                  <h4>Ações</h4>
                </th>
              </tr>
              {userStudents.map((student) => (
                <tr>
                  <td>
                    <h4>{student.id}</h4>
                  </td>
                  <td>
                    <h4>{student.first_name + " " + student.surname}</h4>
                  </td>
                  <td>
                    <h4>{student.email}</h4>
                  </td>
                  <td>
                    <h4>{student.celular}</h4>
                  </td>
                  <td>
                    <img src={ImgDelete} />
                    <img src={ImgEdit} />
                  </td>
                </tr>
              ))}
            </table>
          </ContainerTable>
        </ContainerClients>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
