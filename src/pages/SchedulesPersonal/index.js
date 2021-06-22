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
  Menu,
} from "./styles";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";
import { api } from "../../services/api";
import { format } from "date-fns";
import Imglogo from "../../assets/menu.png";
import MenuLateral from "../../components/MenuLateral";
import { Content } from "../Aulas/styles";

function Clients() {
  const [showMenu, setShowMenu] = useState(false);
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
        <Content>
          <ContainerAgendamentos>
            <Title>
              <TitleContainer>
                <h4>AULAS DO PERSONAL</h4>
              </TitleContainer>
            </Title>
            <Search>
              <ButtonSearch>Buscar</ButtonSearch>
              <Input id="client" placeholder="Pesquisar Aula" type="text" />
            </Search>
            <ContainerTable>
            </ContainerTable>
          </ContainerAgendamentos>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Clients;
