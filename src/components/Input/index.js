import { Container } from "./styles";

function Input({ id, label, value, handler, ...rest }) {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input id={id} value={value} handler={handler} placeholder="" {...rest} onChange={handler}/>
        </Container>
    );
}

export default Input;
