import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { Container, FormLogin } from "./styles";

import Imglogo from "../../assets/fitware.png";

function Login() {
    return (
        <Container>
            <FormLogin>
                <header>
                    <img src={Imglogo} />
                </header>
                <body>
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
                </body>
            </FormLogin>
        </Container>
    );
}

export default Login;
