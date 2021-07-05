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

export const ContainerAgendamentos = styled.div`
  width: 60vw;
  min-height: 620px;
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
  flex-direction: row;

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

export const ContainerTable = styled.div`
  width: 57vw;
  height: 500px;
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--DarkGray);
  overflow-y: auto;
  border-radius: 10px;

  > table {
    width: 98%;
    margin-top: 10px;
    background-color: var(--light);
    border-radius: 10px;

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
      border-bottom: 1px solid gray;
    }

    h3 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;