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
  ContainerIcon,
  ContainerProfile,
  CardsProfile,
} from "./styles";

import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import { useHistory } from "react-router-dom";

import IconUser from "../../assets/userIconWhite.svg";
import IconList from "../../assets/list.svg";
import IconCadastro from "../../assets/cadastro.svg";
import IconAulas from "../../assets/aula.svg";
import IconAdmin from "../../assets/admin.svg";
import IconMobile from "../../assets/mobile.svg";
import QRCode from "../../assets/qrCode.png";
import { api } from "../../services/api";
import SpinnerLoading from "../../components/SpinnerLoading";
import Alert from "../../components/Alert";

function NewPersonal({ handleReload, setIsLoading, setMessage }) {
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

      setMessage({
        title: "Ok!",
        description: "Personal Cadastrado com Sucesso!",
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
          }}
          value={personal.confirmePassword}
          handler={handleInput}
        />
      </InfoTreino>

      <button disabled={buttonDisabled()}>Enviar</button>
    </FormNewPersonal>
  );
}

function Profile() {

  const [academy, setAcademy] = useState([]);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    const response = await api.get("/academy");

    setAcademy(response.data);
  };

  return (
    <>
    <ContainerProfile>
    {academy.map((a) => (
      <>
      <CardsProfile><h4>{a.name}</h4></CardsProfile>
      <CardsProfile><h4>{a.cnpj}</h4></CardsProfile>
      <CardsProfile><h4>{a.telefone}</h4></CardsProfile>
      <CardsProfile><h4>{a.AddressAcademy.cep}</h4></CardsProfile>
      <CardsProfile><h4>{a.AddressAcademy.street}</h4></CardsProfile>
      <CardsProfile><h4>{a.AddressAcademy.city}</h4></CardsProfile>
      <CardsProfile><h4>{a.AddressAcademy.number}</h4></CardsProfile>
      <CardsProfile><h4>{a.AddressAcademy.state}</h4></CardsProfile>
      </>
      ))}
    </ContainerProfile>
    </>
  )
}

function HomeAdmin() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [showPersonal, setShowPersonal] = useState(false);

  const [showQRCode, setShowQRCode] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const [message, setMessage] = useState(undefined);

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
      {isLoading && <SpinnerLoading />}
      {showPersonal && (
        <Modal
          title="Cadastrar Personal Trainer"
          handleClose={() => setShowPersonal(false)}
        >
          <NewPersonal
            handleReload={handleReload}
            setIsLoading={setIsLoading}
            setMessage={setMessage}
          />
        </Modal>
      )}

      {showProfile && (
        <Modal 
        handleClose={() => setShowProfile(false)}>
          <Profile />
        </Modal>
      )}

      {showQRCode && (
        <Modal handleClose={() => setShowQRCode(false)}>
          <img src={QRCode} alt="QRCode" />
        </Modal>
      )}
      <Header />
      <Alert message={message} type="success" handleClose={setMessage} />
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
                <ContainerIcon onClick={() => setShowProfile(true)}>
                  <img src={IconAdmin} alt="iconAdmin" />
                </ContainerIcon>
                <h4>Perfil</h4>
              </ItemMenuPerfil>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenuQRcode onClick={() => setShowQRCode(true)}>
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
