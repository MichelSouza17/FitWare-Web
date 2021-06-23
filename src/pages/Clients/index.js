import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerClients,
  Title,
  Search,
  ButtonSearch,
  ContainerTable,
  TitleContainer,
  Menu,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";
import Imglogo from "../../assets/menu.png";
import MenuLateral from "../../components/MenuLateral";
import { Content } from "../Aulas/styles";

function Clients() {
  const [showMenu, setShowMenu] = useState(false);
  //a api retorna uma lista.. então isso deve ser uma lista vazia no começo
  const [userStudents, setUserStudents] = useState([]);

  const [search, setSearch] = useState("");

  //precisamos colocar tudo isso dentro de uma função async depois chamar ela
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      //aqui consumimos a api, sempre dentro de um try catch
      const response = await api.get("/userAcademy?search");

      //dentro de response tem o data, que é o corpo da resposta
      //que contém a lista, colocamos ela no state
      // assim, que inicia vazio ne. isso, inicia vazio, depois substitui quando houver resposta.blz

      setUserStudents(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleReload = () => {
    loadStudents();
  };

  //agora já temos a lista em mãos... só percorrer e mostrar na tela.

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) handleReload();

    if (e.target.value.length < 4) return;

    try {
      const response = await api.get("/userAcademy", {
        params: { search: e.target.value },
      });

      setUserStudents(response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container onClick={() => (showMenu ? setShowMenu(false) : "")}>
        {showMenu && <MenuLateral />}
        <Menu onClick={() => setShowMenu(true)}>
          {!showMenu && (
            <img
              src={Imglogo}
              onClick={() => (showMenu ? setShowMenu(true) : "")}
            />
          )}
        </Menu>
        <Content>
          <ContainerClients>
            <Title>
              <TitleContainer>
                <h4>ALUNOS</h4>
              </TitleContainer>
            </Title>
            <Search>
              <ButtonSearch>Buscar</ButtonSearch>
              <Input
                id="client"
                placeholder="Pesquisar Alunos"
                type="text"
                handler={handleSearch}
                value={search}
              />
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
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
