import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 100px;
    background-color: var(--Dark);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 180px;
        height: 80px;
        margin-left: 10px;

        border: 1px solid #fff;
        border-radius: 5px;
        padding: 4px;
    }
`;
