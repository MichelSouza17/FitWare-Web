import { Container } from "./styles";

function Input({ id, label, value, handler, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} handler={handler} {...rest} />
    </Container>
  );
}

export default Input;
