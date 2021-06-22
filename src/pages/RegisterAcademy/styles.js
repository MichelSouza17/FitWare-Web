import styled from "styled-components";

export const ContainerGeral = styled.div`
  width: 100vw;
  min-height: 800px;
  height: auto;
  padding-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--light);
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

export const FormContainer = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);
  margin-bottom: 20px;

  h4 {
    color: red;
    font-family: Verdana;
  }
`;

export const ContainerAcademy = styled.div`
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

export const Academy = styled.div`
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
    min-width: 480px;
    opacity: 60%;
  }

  label {
    margin-left: 0px;
    margin-top: 7px;
  }
`;

export const ContainerAddress = styled.div`
  width: 1000px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;
  padding-bottom: 10px;

  background-color: var(--light);

  input {
    width: 350px;
  }

  > h1 {
    font-size: 22px;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
  }
`;

export const Cep = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: var(--light);

  input {
    width: 250px;
  }
`;

export const Street = styled.div`
  width: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  background-color: var(--light);
`;

export const Neighborhood = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  overflow-y: hidden;
`;

export const Bairro = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  overflow-y: hidden;

  input {
    width: 150px;
  }
`;

export const Citys = styled.div`
  width: 520px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow-y: hidden;
  gap: 5px;

  input {
    width: 150px;
  }
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
    width: 400px;
  }
`;

export const ContainerButtons = styled.form`
  width: 550px;
  min-height: 80px;
  height: auto;
  margin-top: 10px;
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
  background-color: #49c955;
`;

export const ButtonCancel = styled.button`
  width: 120px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: var(--redLight);

  > a {
    text-decoration: none;
    color: black;
  }
`;
