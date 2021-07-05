import { Container } from "./styles";

function Input({ id, label, value, handler, ...rest }) {
<<<<<<< HEAD
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} handler={handler} {...rest} />
    </Container>
  );
=======
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input id={id} value={value} handler={handler} placeholder="" {...rest} onChange={handler}/>
        </Container>
    );
>>>>>>> 4ba85e883bd09c2d7fbd902197c905ba83a2c6ba
}

export default Input;
