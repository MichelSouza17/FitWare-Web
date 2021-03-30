import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 65px;
    background-color: var(--light);
    z-index: 9;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    img {
        width: 170px;
        height: 60px;
        padding: 5px;
        margin-left: 10px;
    }
`;
