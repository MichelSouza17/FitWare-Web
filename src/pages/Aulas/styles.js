import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 96vh;
  height: auto;
  padding-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--accentGray);
`;

export const Menu = styled.div`
  width: 50px;
  height: 40px;

  display: flex;
  align-self: flex-start;

  img {
    width: 50px;
    height: 40px;
    padding: 5px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  min-height: 700px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerAulas = styled.div`
  width: 60vw;
  min-height: 700px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);
`;

export const Title = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  margin-left: -10px;

  align-self: flex-start;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  height: 100%;
  width: 90%;

  h4 {
    font-size: 15px;
    text-align: right;
    padding-top: 15px;
    color: var(--light);
  }
`;

export const Functions = styled.div`
  width: 95%;
  height: 70px;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  background-color: var(--light);
`;

export const ContainerAbas = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 20px;
  gap: 10px;
  overflow-y: hidden;

  display: flex;
  flex-direction: row;
  background-color: var(--light);
`;

export const Abas = styled.button`
  width: 140px;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  display: flex;
  align-items: center;
  background-color: #dadada;

  h4 {
    font-size: 15px;
    text-align: center;
    color: black;
  }
`;

export const InsertAula = styled.div`
  width: 20%;
  height: 50px;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  background-color: var(--light);

  h3 {
    font-size: 15px;
    margin-top: 12px;
    margin-right: 5px;
    text-align: center;
    color: black;
  }
`;

export const ButtonAula = styled.button`
  width: 30px;
  height: 30px;
  overflow-y: hidden;
  margin-top: 5px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: var(--blueLight);

  p {
    font-size: 15px;
    color: white;
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

export const ContainerTable = styled.div`
  width: 57vw;
  height: 550px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--DarkGray);
  overflow-y: auto;

  > table {
    width: 98%;
    margin-top: 10px;
    background-color: var(--light);
    border-radius: 5px;

    th {
      background-color: var(--blueLight);
      padding: 10px;
      color: var(--light);
      font-weight: normal;
      border-radius: 5px;
    }

    td {
      text-align: center;
      padding: 10px;
      font-size: 12px;
      background-color: var(--light);

      img {
        width: 30px;
      }
    }

    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;
