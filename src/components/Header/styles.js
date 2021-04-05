import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 50px;
    background-color: var(--light);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    img {
        width: 140px;
        height: 50px;
        padding: 5px;
        margin-left: 10px;
    }
`;
