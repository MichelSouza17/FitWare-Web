import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 700px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #dadada;
`;

export const ContainerAulas = styled.div`
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

  align-self: flex-start;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px;

  h4 {
    font-size: 15px;
    text-align: right;
    align-items: center;
    padding-left: 500px;
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
    margin-top: 10px;
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
  background-color: var(--primary);

  p {
    font-size: 15px;
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

  input{
        width: 98%;
        font-weight: bold;
    }

    select{
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

  input{
   width: 280px;
  }
`;

export const ContainerTable = styled.div`
  width: 57vw;
  height: 550px;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--DarkGray);
  gap: 10px;

  > table {
    width: 100%;

    th {
      background-color: var(--DarkGray);
      padding: 10px;
    }

    td {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid gray;
    }
  }
`;