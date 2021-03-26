import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--Dark);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormLogin = styled.form`
    width: 500px;
    height: 350px;
    background-color: var(--RedTransparent);
    border-radius: 7px;

    display: flex;
    align-items: center;
    flex-direction: column;

    header {
        width: 100%;
        height: 100px;
        background-color: var(--DarkGray);
        border-radius: 7px;
    }

    label{
        margin-left: 10px;
        margin-top: 7px;
    }

    button{
        margin-top: 12px;
        margin-bottom: 10px;
    }
`;
