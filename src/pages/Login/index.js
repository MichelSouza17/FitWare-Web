import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { Container, FotoAcademy, FormLogin } from "./styles";

import AcademiaImage from "../../assets/academia.jpg";
import Loading from "../../components/Loading";

function Login() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState(undefined);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e, req, res) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      setIsLoading(false);

      //verificar se o perfil é um personal ou uma academia
      history.push("/home");

      //se for personal, manda para home de personal
    } catch (error) {
      console.error(error);
      setMessage({ title: "Ops...", description: error.response.data.error });
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <FotoAcademy src={AcademiaImage} />
        <FormLogin onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <Input
            id="email"
            label="E-mail"
            type="email"
            value={login.email}
            handler={handleInput}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={login.password}
            handler={handleInput}
          />
          <button>Entrar</button>
          <Link to="/registerAcademy">Não tenho Registro</Link>
        </FormLogin>
      </Container>
    </>
  );
}

export default Login;
