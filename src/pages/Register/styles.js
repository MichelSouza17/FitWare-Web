import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;
  padding-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--light);
`;

export const FormContainer = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);
`;

export const ContainerUser = styled.div`
  width: 1000px;
  min-height: 220px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);

  > h1 {
    font-size: 22px;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
  }
`;

export const User = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  margin-top: 25px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    min-width: 280px;
    opacity: 60%;
  }
  select {
    min-width: 280px;
    opacity: 60%;
  }

  label {
    margin-left: 0px;
    margin-top: 7px;
  }
`;

export const ContainerInfo = styled.div`
  width: 1005px;
  min-height: 332px;
  height: auto;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerDice = styled.div`
  width: 480px;
  height: 332px;
  margin-right: 20px;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerContacts = styled.div`
  width: 475px;
  height: 237px;
  margin-bottom: 10px;
  padding-top: 5px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  background-color: var(--light);

  > h1 {
    font-size: 22px;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
  }

  input {
    width: 235px;
  }

  select {
    width: 235px;
  }
`;

export const ContainerWeight = styled.div`
  width: 475px;
  height: 80px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: var(--light);
`;

export const ContainerAddress = styled.div`
  width: 500px;
  height: 327px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  padding-top: 15px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  background-color: var(--light);

  input {
    width: 400px;
  }

  > h1 {
    font-size: 22px;
    text-align: center;
    overflow: hidden;
  }
`;

export const Cep = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;

  background-color: var(--light);

  input {
    width: 130px;
  }
`;

export const Neighborhood = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-y: hidden;

  background-color: var(--light);
`;

export const Bairro = styled.div`
  width: 390px;
  height: 60px;
  display: flex;
  align-items: center;
  overflow-y: hidden;

  background-color: var(--light);

  input {
    width: 300px;
  }
`;

export const Numero = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  overflow-y: hidden;

  background-color: var(--light);

  input {
    width: 80px;
  }
`;

export const Citys = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-y: hidden;
  gap: 20px;

  background-color: var(--light);

  input {
    width: 190px;
  }
`;

export const ContainerAcademy = styled.div`
  width: 1000px;
  height: 80px;
  margin-top: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);
`;

export const TextAcademy = styled.div`
  width: 450px;
  height: 80px;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);

  > p {
    font-size: 15px;
    text-align: left;
    align-self: flex-start;
    overflow: hidden;
    /* font-weight: bold; */
    padding-inline-start: 20px;
  }
`;

export const SelectAcademy = styled.div`
  width: 550px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: var(--light);

  select {
    width: 530px;
    align-self: flex-end;
    margin-right: 20px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerButtons = styled.form`
  width: 550px;
  min-height: 80px;
  height: auto;
  margin-top: 50px;
  gap: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonSave = styled.button`
  width: 120px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #49c955; ;
`;

export const ButtonCancel = styled.button`
  width: 120px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
`;

export const ContainerPassword = styled.div`
  width: 1000px;
  height: 80px;
  margin-top: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);

  input {
    width: 300px;
  }
`;
