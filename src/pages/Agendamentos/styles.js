import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 96vh;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #dadada;
`;

export const ContainerAgendamentos = styled.div`
  width: 60vw;
  min-height: 700px;
  height: auto;
  margin-top: 80px;
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
  flex-direction: row;

  align-self: flex-start;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px;

  h4 {
    font-size: 15px;
    text-align: right;
    align-items: center;
    padding-left: 400px;
    padding-top: 15px;
    color: var(--light);
  }
`;

export const Search = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  margin-left: 70px;
  margin-top: 50px;

  align-self: flex-start;
  background-color: var(--light);
  box-shadow: 1px 1px 10px 1px black;
  border-radius: 10px;

  input {
    width: 500px;
    margin-top: -8px;
    padding-left: 20px;
    border: none;
    font-size: 22px;
  }
`;

export const ButtonSearch = styled.button`
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px 0 0 0;
`;

export const ContainerTable = styled.div`
  width: 57vw;
  height: 500px;
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--DarkGray);
  overflow-y: auto;

  > table {
    width: 90%;
    margin-top: 30px;
    background-color: var(--light);

    th {
      background-color: var(--blueLight);
      padding: 10px;
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
