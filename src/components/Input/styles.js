import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    position: relative;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
        height: 25px;
        font-size: 17px;
        border-radius: 4px;
    }
    label{
        font-weight: bold;
    }
`;