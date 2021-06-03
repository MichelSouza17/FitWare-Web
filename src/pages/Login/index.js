import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { Container, FotoAcademy, FormLogin } from "./styles";

import AcademiaImage from "../../assets/academia.jpg";

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

    // const { userPerfil } = req;

    // if (userPerfil !== "admin" && userPerfil !== "PersonalTrainer") {
    //   return res.status(401).send({ erro: "Acesso negado" });
    // }

    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

      setIsLoading(false);

      history.push("/");
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
          <Link to="/register">Não tenho Registro</Link>
        </FormLogin>
      </Container>
    </>
  );
}

export default Login;
