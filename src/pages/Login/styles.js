import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--DarkGray);

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
        height: 110px;
        background-color: var(--Dark);
        border-radius: 7px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 300px;
            height: 100px;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 4px;
        }
    }

    body{
        width: 100%;
        height: 100%;
        background-color: var(--RedTransparent);

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    label {
        margin-left: 10px;
        margin-top: 7px;
    }

    button {
        margin-top: 12px;
        margin-bottom: 10px;
    }
`;
