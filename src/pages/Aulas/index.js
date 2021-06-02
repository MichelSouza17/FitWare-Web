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
  TitleContainer,
} from "./styles";
import Footer from "../../components/Footer";
import { useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";

function NewAula({ handleReload, setIsLoading }) {
  // const handleInput = (e) => {
  //   setNewQuestion({ ...newQuestion, [e.target.id]: e.target.value });
  // };

  // const handleAddNewQuestion = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();

  //   data.append("title", newQuestion.title);
  //   data.append("description", newQuestion.description);

  //   const categories = categoriesSel.reduce((s, c) => (s += c.id + ","), "");

  //   data.append("categories", categories.substr(0, categories.length - 1));

  //   if (image) data.append("image", image);
  //   if (newQuestion.gist) data.append("gist", newQuestion.gist);

  //   setIsLoading(true);

  //   try {
  //     await api.post("/questions", data, {
  //       headers: {
  //         "Content-type": "multipart/form-data",
  //       },
  //     });

  //     handleReload();
  //   } catch (error) {
  //     alert(error);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <FormNewAula>
      <Input id="aula" label="Aula:" />
      <Input id="Professor" label="Professor(a):" />
      <InfoTreino>
        <Input id="limite" label="Limite de Pessoas:" />
        <Input id="duration" label="Duração Horas:" />
        <Input id="horario" label="Horário:" />
        <Input id="data" label="Data:" />
      </InfoTreino>
      <Select id="typeTreino" label="Tipo de Treino"></Select>
      <button>Enviar</button>
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
            <TitleContainer>
              <h4>AULAS</h4>
            </TitleContainer>
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
