import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  ContainerHome,
  ItemMenu,
  ContainerItensMenu,
  InfoTreino,
  FormNewAula,
  Radios,
} from "./styles";

import { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

import IconAgenda from "../../assets/iconAgenda.svg";
import IconAulas from "../../assets/aula.svg";
import { api } from "../../services/api";
import Loading from "../../components/Loading";
import { getUser } from "../../services/security";
import Select from "../../components/Select";
import Tag from "../../components/Tag";

function NewAula({ handleReload, setIsLoading }) {
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
          value={schedule.link}
          handler={handleInput}
        />
      )}
      <button>Enviar</button>
    </FormNewAula>
  );
}

function HomePersonal() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNewAula, setShowNewAula] = useState(false);
  const handleReload = () => {
    setShowNewAula(false);
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      {showNewAula && (
        <Modal
          title="Novo Agendamento"
          handleClose={() => setShowNewAula(false)}
        >
          <NewAula handleReload={handleReload} setIsLoading={setIsLoading} />
        </Modal>
      )}
      <Container>
        <ContainerHome>
          <h3>Bem Vindo Ao Fitware!</h3>
          <ContainerItensMenu>
            <ItemMenu onClick={() => setShowNewAula(true)}>
              <img src={IconAulas} alt="Aulas" />
              <h4>Criar Aulas</h4>
            </ItemMenu>
            <ItemMenu>
              <Link to="/schedulesPersonal">
                <img src={IconAgenda} alt="iconAgenda" />
                <h4>Aulas Personal</h4>
              </Link>
            </ItemMenu>
          </ContainerItensMenu>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default HomePersonal;
