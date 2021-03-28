import styled from "styled-components";

export const ContainerAll = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--DarkGray);

    overflow-x: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const DivInfos = styled.form`
    width: 80%;
    height: 350px;
    background-color: var(--light);
    margin-top: 40px;

    border: 1px solid #000000;
    border-radius: 5px;
`;
