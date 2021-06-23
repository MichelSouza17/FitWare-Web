import { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  ContainerAgendamentos,
  Title,
  ContainerTable,
  TitleContainer,
} from "./styles";
import Footer from "../../components/Footer";
import { api } from "../../services/api";
import { format } from "date-fns";
import { Content } from "../Aulas/styles";

function SchedulesPersonal() {
  const [Schedules, setSchedules] = useState([]);

  useEffect(() => {
    loadSchedules();
  }, []);

  const loadSchedules = async () => {
    try {
      const response = await api.get("/schedules");

      console.log(response.data);
      setSchedules(response.data.Schedules);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ContainerAgendamentos>
            <Title>
              <TitleContainer>
                <h4>AULAS DO PERSONAL</h4>
              </TitleContainer>
            </Title>
            <ContainerTable>
              <table>
                <tr>
                  <th>
                    <h4>Tipo de Aula</h4>
                  </th>
                  {Schedules.is_remote === "true" && (
                    <th>
                      <h4>Link Aula</h4>
                    </th>
                  )}
                  <th>
                    <h4>Categoria de Treino</h4>
                  </th>
                  <th>
                    <h4>Data</h4>
                  </th>
                  <th>
                    <h4>Limite Alunos</h4>
                  </th>
                  <th>
                    <h4>Duração</h4>
                  </th>
                </tr>
                {Schedules.map((a) => (
                  <tr>
                    <td>
                      <h2>
                        {a.is_remote ? (
                          <a href={a.link} target="_blank">
                            Remota
                          </a>
                        ) : (
                          "Presencial "
                        )}
                      </h2>
                    </td>
                    {a.is_remote === "true" && (
                      <td>
                        <h2>{a.link}</h2>
                      </td>
                    )}
                    <td>
                      <h4>
                        {a.TraningCategories.map((t) => (
                          <li>{t.description}</li>
                        ))}
                      </h4>
                    </td>
                    <td>
                      <h4>{format(new Date(a.date), "dd/MM/yyyy")}</h4>
                    </td>
                    <td>
                      <h4>{a.limit_person}</h4>
                    </td>
                    <td>
                      <h4>{a.duration}</h4>
                    </td>
                  </tr>
                ))}
              </table>
            </ContainerTable>
          </ContainerAgendamentos>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default SchedulesPersonal;
