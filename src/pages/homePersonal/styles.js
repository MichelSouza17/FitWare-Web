import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 96vh;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--accentGray);
`;

export const ContainerHome = styled.div`
  width: 60vw;
  min-height: 700px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 20px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);

  h3 {
    background-color: var(--blueLight);
    height: 50px;
    width: 60%;
    text-align: center;
    padding-top: 15px;
    border-radius: 0 0 10px 10px;
    color: var(--light);
  }
`;

export const ContainerItensMenu = styled.div`
  width: 57vw;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-items: left;
  flex-direction: row;
`;

export const ItemMenu = styled.div`
  height: 40%;
  width: 80%;
  background-color: var(--blueLight);
  margin: 20px;
  border-radius: 10px;
  transition: 1s;

  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    height: 45%;
    width: 85%;
    transition: 0.9s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  img {
    margin-left: 42%;
    height: 60px;
    width: 60px;
    margin-top: 65px;
  }

  h4 {
    text-align: center;
    margin-top: 10px;
    color: var(--light);
  }

  > a {
    text-decoration: none;
  }
`;

export const FormNewAula = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 15px;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  input {
    width: 98%;
    font-weight: bold;
    opacity: 50%;
  }

  select {
    width: 70%;
  }

  button {
    margin-top: 20px;
  }
`;

export const InfoTreino = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  input {
    width: 280px;
  }
`;

export const Radios = styled.div`
  width: 80%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 20px;

  input {
    width: 40px;
  }

  label {
    margin-left: -120px;
  }

  h5 {
    margin-top: 12px;
    font-weight: normal;
  }
`;
