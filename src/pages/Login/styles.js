import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--DarkGray);

    overflow-x: hidden;

    display: flex;
    flex-direction: row;

    body {
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: row;
    }
`;

export const FotoAcademy = styled.img`
    width: 70%;
    height: inherit;
`;

export const FormLogin = styled.form`
    width: 30%;
    height: inherit;
    background-color: var(--lightTransparent);
    border-radius: 7px 0px 0px 7px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1 {
        margin-bottom: 40px;
    }

    label {
        margin-left: 10px;
        margin-top: 7px;
    }

    button {
        width: 70%;
        height: 40px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;
