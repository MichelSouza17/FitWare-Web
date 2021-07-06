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
  Menu,
  Content,
} from "./styles";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import { api } from "../../services/api";
import { getUser } from "../../services/security";
import ImgDelete from "../../assets/iconDelete.png";
import ImgEdit from "../../assets/iconEdit.png";
import { format } from "date-fns";
import Imglogo from "../../assets/menu.png";
import MenuLateral from "../../components/MenuLateral";
import SpinnerLoading from "../../components/SpinnerLoading";
import Alert from "../../components/Alert";

function NewAula({ handleReload, setIsLoading, setMessage }) {
  const [schedule, setSchedule] = useState({
    personal_id: "",
    hour: "",
    date: "",
    limit_person: "",
    duration: "",
    traningCategory: "",
    is_remote: "",
    link: "",
  });

  const [categories, setCategories] = useState([]);

  const [personal, setPersonal] = useState([]);

  const [categoriesSel, setCategoriesSel] = useState([]);

  const [personalSel, setPersonalSel] = useState(null);

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

  useEffect(() => {
    const loadPersonal = async () => {
      try {
        const response = await api.get("/personalTrainer");

        setPersonal(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadPersonal();
  }, []);

  const handlePersonal = (e) => {
    const idSel = e.target.value;

    setPersonalSel(idSel);
  };

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
    setPersonalSel(personalSel.filter((c) => c.id !== idUnsel));

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

    const user = await getUser();

    setIsLoading(true);

    try {
      const response = await api.post(`/academy/${user.userId}/schedule`, {
        personal_id: personalSel,
        hour: schedule.hour,
        date: schedule.date,
        limit_person: schedule.limit_person,
        duration: schedule.duration,
        traningCategory: categoriesSel.map((c) => c.id),
        is_remote: schedule.is_remote,
        link: schedule.link,
      });

      setMessage({ title: "Ok!", description: "Aula Cadastrada com Sucesso!" });

      handleReload();
    } catch (error) {
      console.error(error);
      alert(error.response?.data.error);
      setIsLoading(false);
    }
  };

  return (
    <FormNewAula onSubmit={handleSubmit}>
      <Select
        id="personal_id"
        label="Professor(a):"
        handler={handlePersonal}
        ref={categoriesRef}
      >
        <option value="">Selecione</option>
        {personal.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </Select>

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
          placeholder="Link para Aula Remota"
          value={schedule.link}
          handler={handleInput}
        />
      )}
      <button>Enviar</button>
    </FormNewAula>
  );
}

function Aulas() {
  const [showMenu, setShowMenu] = useState(false);
  const [reload, setReload] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

  const [showNewAula, setShowNewAula] = useState(false);
  const [showPresencial, setShowPresencial] = useState(true);

  const [aulasShow, setAulasShow] = useState([]);

  const [aulas, setAulas] = useState([]);

  const [message, setMessage] = useState(undefined);

  const loadSchedules = async () => {
    if (isLoadingFeed) return;

    setIsLoadingFeed(true);
    const response = await api.get("/schedule");

    setAulas(response.data);

    setIsLoadingFeed(false);
  };

  useEffect(() => {
    if (aulas.length > 0) {
      if (showPresencial) {
        setAulasShow(aulas.filter((a) => !a.is_remote));
      } else {
        setAulasShow(aulas.filter((a) => a.is_remote));
      }
    }
  }, [aulas, showPresencial]);

  useEffect(() => {
    loadSchedules();
  }, [reload]);

  const handleReload = () => {
    setShowNewAula(false);
    setIsLoading(false);
    setAulasShow([]);
    setReload(Math.random());
  };

  return (
    <>
      {isLoading && <SpinnerLoading />}
      {showNewAula && (
        <Modal
          title="Novo Agendamento"
          handleClose={() => setShowNewAula(false)}
        >
          <NewAula
            handleReload={handleReload}
            setIsLoading={setIsLoading}
            setMessage={setMessage}
          />
        </Modal>
      )}
      <Header />
      <Alert message={message} type="success" handleClose={setMessage} />
      <Container onClick={() => (showMenu ? setShowMenu(false) : "")}>
        {showMenu && <MenuLateral />}
        <Menu onClick={() => setShowMenu(true)}>
          {!showMenu && (
            <img
              src={Imglogo}
              alt="logo"
              onClick={() => (showMenu ? setShowMenu(true) : "")}
            />
          )}
        </Menu>
        <Content>
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
              <table>
                <tr>
                  <th>
                    <h4>Tipo de Aula</h4>
                  </th>
                  <th>
                    <h4>Nome do Personal</h4>
                  </th>
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
                  <th>
                    <h4>Ações</h4>
                  </th>
                </tr>

                {aulasShow.map((a) => (
                  <tr>
                    <td>
                      <h2>
                        {a.is_remote ? (
                          <a href={a.link} target="_blank">
                            Remota
                          </a>
                        ) : (
                          "Presencial"
                        )}
                      </h2>
                    </td>
                    <td>
                      <h4>{a.PersonalTrainer.name}</h4>
                    </td>
                    <td>
                      <h4>
                        {a.TraningCategories.map((t) => (
                          <li>{t.description}</li>
                        ))}
                      </h4>
                    </td>
                    <td>
                      <h4>
                        {format(
                          new Date(
                            new Date(a.date).getUTCFullYear(),
                            new Date(a.date).getUTCMonth(),
                            new Date(a.date).getUTCDate()
                          ),
                          "dd/MM/yyyy"
                        )}
                      </h4>
                    </td>
                    <td>
                      <h4>{a.limit_person}</h4>
                    </td>
                    <td>
                      <h4>{a.duration}</h4>
                    </td>
                    <td>
                      <img src={ImgDelete} alt="delete" />
                      <img src={ImgEdit} alt="edit" />
                    </td>
                  </tr>
                ))}
              </table>
            </ContainerTable>
          </ContainerAulas>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Aulas;
