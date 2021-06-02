import Header from "../../components/Header";
import {
  Container,
  ContainerAulas,
  Title,
  ContainerTable,
  ContainerAbas,
  Abas,
  ButtonAula,
  InsertAula,
  Functions,
  FormNewAula,
  InfoTreino,
  CheckBox,
} from "./styles";
import Footer from "../../components/Footer";
import { useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

function NewAula() {
  const history = useHistory();
  const [schedule, setSchedule] = useState({
    hour: "",
    date: "",
    limit_person: "",
    duration: "",
    traningCategory: "",
    is_remote: "",
    link: "",
  });

  const handleInput = (e) => {
    setSchedule({ ...schedule, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/schedule", {
        hour: schedule.hour,
        date: schedule.date,
        limit_person: schedule.limit_person,
        duration: schedule.duration,
        traningCategory: schedule.traningCategory,
        is_remote: schedule.is_remote,
        link: schedule.link,
      });

      history.push("/agendamentos");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  return (
    <FormNewAula>
      <Input id="Professor" label="Professor(a):" value="" handler="" />

      <InfoTreino>
        <Input
          id="limit_person"
          label="Limite de Pessoas:"
          value={schedule.limit_person}
          handler={handleInput}
        />

        <Input
          id="duration"
          label="Duração Horas:"
          value={schedule.duration}
          handler={handleInput}
        />

        <Input
          id="hour"
          label="Horário:"
          value={schedule.hour}
          handler={handleInput}
        />

        <Input
          id="date"
          label="Data:"
          type="date"
          value={schedule.date}
          handler={handleInput}
        />
      </InfoTreino>
      <Select
        id="traningCategory"
        label="Categoria de Treino:"
        value={schedule.traningCategory}
        handler={handleInput}
      />

      <CheckBox>
        <Input
          type="radio"
          id="is_remote"
          name="typeaula"
          value={schedule.is_remote}
          handler={handleInput}
        />
        <label for="presencial">
          <h5>Presencial</h5>
        </label>

        <Input
          type="radio"
          id="is_remote"
          name="typeaula"
          value={schedule.is_remote}
          handler={handleInput}
        />
        <label for="online">
          <h5>Online</h5>
        </label>
      </CheckBox>
      <button onSubmit={handleSubmit}>Enviar</button>
    </FormNewAula>
  );
}

function Aulas() {
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  return (
    <>
      {showNewQuestion && (
        <Modal
          title="Novo Agendamento"
          handleClose={() => setShowNewQuestion(false)}
        >
          <NewAula />
        </Modal>
      )}
      <Header />
      <Container>
        <ContainerAulas>
          <Title>
            <h4>AULAS</h4>
          </Title>
          <Functions>
            <ContainerAbas>
              <Abas>
                <h4>Presenciais</h4>
              </Abas>
              <Abas>
                <h4>Onlines</h4>
              </Abas>
            </ContainerAbas>
            <InsertAula>
              <h3>Nova Aula</h3>
              <ButtonAula onClick={() => setShowNewQuestion(true)}>
                <p>+</p>
              </ButtonAula>
            </InsertAula>
          </Functions>
          <ContainerTable></ContainerTable>
        </ContainerAulas>
      </Container>
      <Footer />
    </>
  );
}

export default Aulas;
