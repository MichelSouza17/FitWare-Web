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
  width: 80vw;
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
  width: 80vw;
  height: 600px;
  margin-top: 40px;
  margin-left: 20px;

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
  width: 85%;
  background-color: var(--blueLight);
  margin-top: 20px;
  margin-left: 12px;
  border-radius: 10px;
  transition: 1s;
  display: flex;
  flex-direction: column;

  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    height: 45%;
    width: 85%;
    transition: 0.9s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  img {
    align-self: center;
    height: 90px;
    width: 90px;
    margin-top: 65px;
  }

  h4 {
    align-self: center;
    text-align: center;
    margin-top: 10px;
    color: var(--light);
  }
`;

export const ItemMenuPerfil = styled.div`
  height: 84%;
  width: 87%;
  background-color: var(--blueLight);
  margin-top: 20px;
  border-radius: 10px;
  transition: 1s;
  align-items: center;
  display: flex;
  flex-direction: column;

  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    transition: 0.9s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  img {
    margin-left: 25%;
    height: 100px;
    width: 100px;
    margin-top: 120px;
  }

  h4 {
    align-self: center;
    text-align: center;
    margin-top: 60px;
    color: var(--light);
    width: 220px;
  }
`;

export const ContainerIcon = styled.div`
  height: 300px;
  width: 100%;
  overflow-y: hidden;
  align-items: center;
  margin-top: 10px;
  display: flex;
  img {
    height: 150px;
    width: 150px;
    align-self: center;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ItemMenuQRcode = styled.div`
  height: 84%;
  width: 87%;
  background-color: var(--blueLight);
  margin-top: 20px;
  border-radius: 10px;
  transition: 1s;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-image: linear-gradient(to bottom, #23b0ff, #81ccf7);
    transition: 0.9s;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  img {
    height: 150px;
    width: 150px;
    align-self: center;
  }

  h4 {
    align-self: center;
    text-align: center;
    margin-top: 60px;
    color: var(--light);
    width: 220px;
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
