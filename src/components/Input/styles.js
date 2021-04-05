import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    position: relative;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
        height: 27px;
        font-size: 17px;
        border-radius: 4px;
        opacity: 50%;
    }
    label{
        font-weight: bold;
        margin-left: 0px;
    }
`;