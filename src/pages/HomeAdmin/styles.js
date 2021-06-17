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
    margin-top: 50px;
  }
`;

export const Title = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  margin-left: -10px;
  flex-direction: row;
  margin-top: 50px;

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

export const ContainerItensMenu = styled.div`
  width: 57vw;
  height: 450px;
  margin-top: 40px;

  display: flex;
  align-items: left;
  flex-direction: row;
`;

export const ContainerColuna = styled.div`
  height: 100%;
  width: 25%;
  flex-direction: column;
  overflow-y: hidden;
`;

export const ItemMenu = styled.div`
  height: 40%;
  width: 80%;
  background-color: var(--blueLight);
  margin: 20px;
  border-radius: 10px;
  text-decoration: none;
  transition: 1s;
  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    height: 45%;
    width: 85%;
    transition: 0.9s;
    box-shadow: 10px 10px 0 0;
  }

  img {
    margin-left: 50px;
    height: 60px;
    width: 60px;
    margin-top: 50px;
  }

  h4 {
    text-align: center;
    margin-top: 10px;
    color: var(--light);
  }
`;

export const ItemMenuQRcode = styled.div`
  height: 85%;
  width: 80%;
  background-color: var(--blueLight);
  margin: 20px;
  border-radius: 10px;
  transition: 1s;
  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    height: 90%;
    width: 85%;
    transition: 0.9s;
    box-shadow: 10px 10px 0 0;
  }

  img {
    margin-left: 10px;
    height: 150px;
    width: 150px;
    margin-top: 100px;
  }

  h4 {
    text-align: center;
    margin-top: 60px;
    color: var(--light);
  }
`;

export const FormNewPersonal = styled.form`
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
