import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 500px;
    height: auto;
    padding-top: 60px;
    padding-bottom: 20px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    background-color: var(--DarkGray);
`;

export const ContainerUser = styled.div`
    width: 1000px;
    min-height: 250px;
    height: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--light);

    > h2 {
        font-size: 22px;
        text-align: center;
        margin-top: 10px;
        overflow: hidden;
    }
`;

export const FormUser = styled.form`
    width: 100%;
    height: 100%;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 10px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

    label {
        margin-left: 10px;
        margin-top: 7px;
    }
`;

export const ContainerInfo = styled.div`
    width: 1000px;
    min-height: 300px;
    height: auto;
    flex-wrap: wrap;


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ContainerDice = styled.div`
    width: 480px;
    height: 300px;
    margin-right: 20px;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerContacts = styled.div`
    width: 100%;
    height: 210px;
    margin-bottom: 10px;
    padding-top: 5px;
    flex-wrap: wrap;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2px;

    background-color: var(--light);
`;

export const ContainerWeight = styled.div`
    width: 100%;
    height: 80px;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: var(--light);
`;

export const ContainerAddress = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    padding-top: 15px;
    flex-wrap: wrap;

    background-color: var(--light);

    input {
        width: 400px;
    }
`;

export const ContainerAcademy = styled.div`
    width: 1000px;
    height: 80px;
    margin-top: 10px;
    flex-wrap: wrap;

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
        font-weight: bold;
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

export const ContainerButtons = styled.div`
    width: 550px;
    min-height: 80px;
    height: auto;
    margin-top: 100px;
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
  background-color: #49C955;
;

`;

export const ButtonCancel = styled.button`
  width: 120px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  background-color: #FF0000;

`;