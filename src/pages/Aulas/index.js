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
  Radios,
  TitleContainer,
} from "./styles";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";
import Presencial from "../../components/Presencial";
import Online from "../../components/Online";
import { format } from "date-fns";

function NewAula() {
  const history = useHistory();
  const [schedule, setSchedule] = useState({
    personal_name: "",
    hour: "",
    date: "",
    limit_person: "",
    duration: "",
    traningCategory: "",
    is_remote: "",
    link: "",
  });

  const [categories, setCategories] = useState([]);

  const [categoriesSel, setCategoriesSel] = useState([]);

  const categoriesRef = useRef();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await api.get("/traningCategories");

        setCategories(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadCategories();
  }, []);

  const handleCategories = (e) => {
    const idSel = e.target.value;

    const categorySel = categories.find((c) => c.id.toString() === idSel);

    if (categorySel && !categoriesSel.includes(categorySel))
      setCategoriesSel([...categoriesSel, categorySel]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";
  };

  const handleUnselCategory = (idUnsel) => {
    setCategoriesSel(categoriesSel.filter((c) => c.id !== idUnsel));

    const { options } = categoriesRef.current;

    for (var i = 0; i < options.length; i++) {
      if (options[i].value === idUnsel.toString()) options[i].disabled = false;
    }
  };

  const handleInput = (e) => {
    setSchedule({ ...schedule, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    const categories = categoriesSel.reduce((s, c) => (s += c.id + ","), "");

    data.append(
      "traningCategories",
      categories.substr(0, categories.length - 1)
    );

    try {
      const response = await api.post("/academy/:id/schedule", {
        personal_name: schedule.personal_name,
        hour: schedule.hour,
        date: schedule.date,
        limit_person: schedule.limit_person,
        duration: schedule.duration,
        traningCategory: categoriesSel.map((c) => c.id),
        is_remote: schedule.is_remote,
        link: schedule.link,
      });

      signIn(response.data);

      history.push("/aulas");
    } catch (error) {
      console.error(error);
      alert(error.response?.data.error);
    }
  };

  return (
    <FormNewAula onSubmit={handleSubmit}>
      <Input
        id="personal_name"
        label="Professor(a):"
        value={schedule.personal_name}
        handler={handleInput}
      />

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
        handler={handleCategories}
        ref={categoriesRef}
      >
        <option value="">Selecione</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.description}
          </option>
        ))}
      </Select>
      <div>
        {categoriesSel.map((c) => (
          <Tag
            key={c.id}
            info={c.description}
            handleClose={() => handleUnselCategory(c.id)}
          ></Tag>
        ))}
      </div>
      <Radios>
        <Input
          type="radio"
          id="is_remote"
          name="typeaula"
          value={false}
          handler={handleInput}
        />
        <label for="presencial">
          <h5>Presencial</h5>
        </label>

        <Input
          type="radio"
          id="is_remote"
          name="typeaula"
          value={true}
          handler={handleInput}
        />
        <label for="online">
          <h5>Online</h5>
        </label>
      </Radios>
      {schedule.is_remote === "true" && (
        <Input
          id="link"
          name="link"
          value={schedule.link}
          handler={handleInput}
        />
      )}
      <button>Enviar</button>
    </FormNewAula>
  );
}

function Aulas() {
  const [showNewAula, setShowNewAula] = useState(false);
  const [showPresencial, setShowPresencial] = useState(true);

  const [aulasShow, setAulasShow] = useState([]);

  const aulas = [
    {
      id: 1,
      hour: "18:00",
      date: "2021-02-05T00:00:00.000Z",
      limit_person: 20,
      duration: "10min",
      is_remote: false,
      TraningCategories: [
        {
          id: 1,
          description: "Treino de força",
        },
      ],
      PersonalTrainer: {
        name: "Luiz",
      },
    },
    {
      id: 2,
      hour: "18:00",
      date: "2021-02-05T00:00:00.000Z",
      limit_person: 20,
      duration: "10min",
      is_remote: true,
      TraningCategories: [
        {
          id: 1,
          description: "Treino de força",
        },
      ],
      PersonalTrainer: {
        name: "Luiz",
      },
    },
  ];

  useEffect(() => {
    let aulasAux = aulas.filter((a) => a.is_remote === !showPresencial);
    setAulasShow(aulasAux);
  }, [showPresencial]);

  return (
    <>
      {showNewAula && (
        <Modal
          title="Novo Agendamento"
          handleClose={() => setShowNewAula(false)}
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
              <Abas
                onClick={() => {
                  setShowPresencial(true);
                }}
              >
                <h4>Presenciais</h4>
              </Abas>
              <Abas
                onClick={() => {
                  setShowPresencial(false);
                }}
              >
                <h4>Onlines</h4>
              </Abas>
            </ContainerAbas>
            <InsertAula>
              <h3>Nova Aula</h3>
              <ButtonAula onClick={() => setShowNewAula(true)}>
                <p>+</p>
              </ButtonAula>
            </InsertAula>
          </Functions>
          <ContainerTable>
            {aulasShow.map((a) => (
              <table>
                <tr>
                  <td>
                    <h2>{a.is_remote ? "Online" : "Presencial"}</h2>
                  </td>
                  <td>
                    <h4>{a.personal_name}</h4>
                  </td>
                  <td>
                    <h4>{a.traningCategory}</h4>
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
                  <td>
                    <img src={ImgDelete} />
                    <img src={ImgEdit} />
                  </td>
                </tr>
              </table>
            ))}

            {/* {showOnline && (
              <Online>
                <table>
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
              </Online>
            )} */}
          </ContainerTable>
        </ContainerAulas>
      </Container>
      <Footer />
    </>
  );
}

export default Aulas;
