import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: var(--light);
  z-index: 9;

  /* border-bottom: solid 1px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px var(--blueLight), -1em 0 0.4em olive;
  position: fixed;

  img {
    width: 130px;
    height: 50px;
    padding: 5px;
    margin-left: 60px;
    /* border: solid 1px; */
    transition: all 0.4s;

    :hover {
      width: 135px;
      height: 52px;
    }
  }

  button {
  }
`;
