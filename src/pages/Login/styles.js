import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--light);
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
  display: flex;
  flex-direction: row;

  body {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const FotoAcademy = styled.img`
  width: 70%;
  height: inherit;
`;

export const FormLogin = styled.form`
  width: 30%;
  height: 50%;
  background-color: var(--light);
  border-radius: 7px 0px 0px 7px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;

  input {
    opacity: 90%;
  }

  label {
    margin-left: 10px;
    margin-top: 7px;
    overflow-y: hidden;
  }

  button {
    margin-top: 15px;
    margin-bottom: 15px;

    color: var(--light);
    overflow-y: hidden;
  }

  h1 {
    color: var(--blueLight);
    overflow-y: hidden;
  }
`;
