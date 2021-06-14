import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerAgendamentos,
  Title,
  Search,
  ButtonSearch,
  ContainerTable,
  TitleContainer,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";
import { api } from "../../services/api";
import { format } from "date-fns";

function Clients() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const loadSchedules = async () => {
      try {
        const response = await api.get("/schedule");

        console.log(response.data);
        setSchedule(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    loadSchedules();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <ContainerAgendamentos>
          <Title>
            <TitleContainer>
              <h4>AGENDAMENTOS DO DIA</h4>
            </TitleContainer>
          </Title>
          <Search>
            <ButtonSearch>Buscar</ButtonSearch>
            <Input id="client" placeholder="Pesquisar Cliente" type="text" />
          </Search>
          <ContainerTable>
            <table>
              <tr>
                <th>
                  <h4>Tipo de Aula:</h4>
                </th>
                <th>
                  <h4>Nome do personal</h4>
                </th>
                <th>
                  <h4>Categoria de Treino:</h4>
                </th>
                <th>
                  <h4>Data:</h4>
                </th>
                <th>
                  <h4>Limite Alunos:</h4>
                </th>
                <th>
                  <h4>Duração:</h4>
                </th>
                <th>
                  <h4>Ações</h4>
                </th>
              </tr>

              {schedule.map((training) => (
                <tr>
                  <td>
                    <h2>Presencial</h2>
                  </td>
                  <td>
                    <h4>{training.personal_name}</h4>
                  </td>
                  <td>
                    <h4>{training.traningCategory}</h4>
                  </td>
                  <td>
                    <h4>{format(new Date(training.date), "dd/MM/yyyy")}</h4>
                  </td>
                  <td>
                    <h4>{training.limit_person}</h4>
                  </td>
                  <td>
                    <h4>{training.duration}</h4>
                  </td>
                  <td>
                    <img src={ImgDelete} />
                    <img src={ImgEdit} />
                  </td>
                </tr>
              ))}
            </table>
          </ContainerTable>
        </ContainerAgendamentos>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
