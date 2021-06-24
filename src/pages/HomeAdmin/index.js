import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  ContainerHome,
  ItemMenu,
  ContainerItensMenu,
  ContainerColuna,
  ItemMenuQRcode,
  FormNewPersonal,
  InfoTreino,
  ItemMenuPerfil,
} from "./styles";

import { useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useHistory } from "react-router-dom";

import IconUser from "../../assets/userIconWhite.svg";
import IconList from "../../assets/list.svg";
import IconCadastro from "../../assets/cadastro.svg";
import IconAulas from "../../assets/aula.svg";
import IconAdmin from "../../assets/admin.svg";
import IconMobile from "../../assets/mobile.svg";
import { api } from "../../services/api";
import Loading from "../../components/Loading";

function NewPersonal({ handleReload, setIsLoading }) {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
    specialty: "",
  });

  const confirmePassword = () =>
    personal.password === personal.confirmePassword;

  const buttonDisabled = () => {
    const { name, email, password, specialty } = personal;

    if (!name || !email || !password || !specialty || !confirmePassword())
      return true;

    return false;
  };

  const handleInput = (e) => {
    setPersonal({ ...personal, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!confirmePassword()) return alert("As senhas precisam ser iguais!");

    setIsLoading(true);

    try {
      const response = await api.post(`/personalTrainer`, {
        name: personal.name,
        email: personal.email,
        password: personal.password,
        specialty: personal.specialty,
      });

      handleReload();
    } catch (error) {
      console.error(error);
      alert(error.response?.data.error);
      setIsLoading(false);
    }
  };

  return (
    <FormNewPersonal onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Nome:"
        value={personal.name}
        handler={handleInput}
      />

      <Input
        id="email"
        label="E-mail:"
        type="email"
        value={personal.email}
        handler={handleInput}
      />

      <Input
        id="specialty"
        label="Especialidade:"
        value={personal.specialty}
        handler={handleInput}
      />

      <InfoTreino>
        <Input
          id="password"
          label="Senha:"
          type="password"
          value={personal.password}
          handler={handleInput}
        />

        <Input
          id="confirmePassword"
          label="Confirmar Senha:"
          type="password"
          onBlur={(e) => {
            if (!confirmePassword()) alert("As senhas precisam ser iguais");
            e.target.focus();
          }}
          value={personal.confirmePassword}
          handler={handleInput}
        />
      </InfoTreino>

      <button disabled={buttonDisabled()}>Enviar</button>
    </FormNewPersonal>
  );
}

function HomeAdmin() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [showPersonal, setShowPersonal] = useState(false);

  const handleReload = () => {
    setShowPersonal(false);
    setIsLoading(false);
  };

  const handleChangeAula = async (e) => {
    history.push("/aulas");
  };
  const handleChangeCadastroAluno = async (e) => {
    history.push("/register");
  };

  const handleChangeListaClients = async (e) => {
    history.push("/clientes");
  };
  return (
    <>
      {isLoading && <Loading />}
      {showPersonal && (
        <Modal
          title="Cadastrar Personal Trainer"
          handleClose={() => setShowPersonal(false)}
        >
          <NewPersonal
            handleReload={handleReload}
            setIsLoading={setIsLoading}
          />
        </Modal>
      )}
      <Header />
      <Container>
        <ContainerHome>
          <h3>Bem Vindo Ao Fitware!</h3>
          <ContainerItensMenu>
            <ContainerColuna>
              <ItemMenu onClick={handleChangeAula}>
                <img src={IconAulas} alt="iconAulas" />
                <h4>Aulas</h4>
              </ItemMenu>
              <ItemMenu onClick={handleChangeListaClients}>
                <img src={IconList} alt="iconList" />
                <h4>Lista de Clientes</h4>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu onClick={handleChangeCadastroAluno}>
                <img src={IconUser} alt="iconUser" />
                <h4>Cadastrar Aluno</h4>
              </ItemMenu>
              <ItemMenu onClick={() => setShowPersonal(true)}>
                <img src={IconCadastro} alt="iconCadastro" />
                <h4>Cadastrar Personal Trainer</h4>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenuPerfil>
                <img src={IconAdmin} alt="iconAdmin" />
                <h4>Perfil</h4>
              </ItemMenuPerfil>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenuQRcode>
                <img src={IconMobile} alt="iconMobile" />
                <h4>Compartilhe o APP com seus Clientes</h4>
              </ItemMenuQRcode>
            </ContainerColuna>
          </ContainerItensMenu>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default HomeAdmin;
