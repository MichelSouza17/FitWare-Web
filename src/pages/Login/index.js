import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { Container, FotoAcademy, FormLogin } from "./styles";

import Imglogo from "../../assets/fitware.png";
import AcademiaImage from "../../assets/academia.jpg";

function Login() {
    return (
        <Container>
            <Header />
            <FotoAcademy src={AcademiaImage} />
            <FormLogin>
                <h1>Faça seu Login</h1>
                <Input
                    id="email"
                    label="email"
                    type="email"
                    // value={}
                    // handler={}
                />
                <Input
                    id="password"
                    label="password"
                    type="password"
                    // value={}
                    // handler={}
                />
                <button>Entrar</button>
                <Link to="/register">Não tenho Registro</Link>
            </FormLogin>
        </Container>
    );
}

export default Login;
