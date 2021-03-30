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

export const ContainerDice = styled.div`
    width: 480px;
    min-height: 300px;
    height: auto;
    margin-right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerContacts = styled.div`
    width: 100%;
    min-height: 300px;
    height: auto;
    margin-bottom: 10px;
    padding-top: 15px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 7px;

    background-color: var(--light);
`;

export const ContainerWeight = styled.div`
    width: 100%;
    min-height: 100px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--light);
`;

export const ContainerAddress = styled.div`
    width: 500px;
    min-height: 300px;
    height: auto;

    background-color: var(--light);
`;