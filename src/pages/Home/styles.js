import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 500px;
    height: auto;
    padding-bottom: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--DarkGray);
`;

export const ContainerSlide = styled.div`
    width: 100%;
    min-height: 400px;
    height: auto;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--light);
`;

export const ContainerUnits = styled.div`
    width: 100%;
    min-height: 250px;
    height: auto;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    background-color: var(--silver);
`;

export const CardUnit1 = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 0.3em black;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FF7171;

    img {
        border: solid 2px black;
        border-radius: 50%;
        margin-bottom: 120px;
        background-color: var(--silver);
    }
`;

export const CardUnit2 = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 0.3em black;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FF7171;

    img {
        border: solid 2px black;
        border-radius: 50%;
        margin-bottom: 120px;
        background-color: var(--silver);
    }
`;

export const CardUnit3 = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 0.3em black;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FF7171;
;

    img {
        border: solid 2px black;
        border-radius: 50%;
        margin-bottom: 120px;
        background-color: var(--silver);
    }
`;

export const ContainerIntroduction = styled.div`
    width: 100%;
    min-height: 100px;
    height: auto;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--silver);

    h1 {
        font-size: 22px;
        margin-top: -25px;
        text-align: center;
        overflow: hidden;
    }

    p {
        text-align: justify;
        margin-top: 15px;
    }
`;

export const ContainerFunctionalities = styled.div`
    width: 100%;
    min-height: 250px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 0 0.3em black;
    padding-left: 350px;
    padding-right: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    background-color: var(--silver);

    img {
        margin: 10px 10px 10px 10px;
    }
`;

export const ContainerBranco = styled.div`
    width: 100%;
    min-height: 100px;
    height: auto;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--light);
`;

export const ContainerSupport = styled.div`
    width: 100%;
    min-height: 200px;
    height: auto;
    margin-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: var(--silver);

    h1 {
        font-size: 22px;
        text-align: center;
        overflow: hidden;
    }
`;

export const Contacts = styled.div`
    width: 500px;
    height: 150px;
    padding-top: 20px;
    padding-left: 50px;

    display: flex;
    justify-content: center;
    align-items: left;
    align-self: flex-start;
    flex-direction: column;

`;