import { Link } from "react-router-dom"
import Input from "../../components/Input"
import { Container, FormLogin } from "./styles"

function Login(){
    return(
        <Container>
            <FormLogin>
                <header></header>
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
                <Link to="/Register">Não tenho Registro</Link>
            </FormLogin>
        </Container>
    )
}

export default Login;