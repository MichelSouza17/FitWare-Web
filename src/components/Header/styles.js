import styled from "styled-components";

export const Container = styled.header`
<<<<<<< HEAD
    width: 100%;
    height: 90px;
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
=======
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

  a {
    margin-right: 5px;

    img {
      width: 50px;
      height: 50px;

      :hover {
        width: 55px;
        height: 52px;
      }
    }
  }
>>>>>>> 4ba85e883bd09c2d7fbd902197c905ba83a2c6ba
`;
