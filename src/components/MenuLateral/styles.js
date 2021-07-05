import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 300px;
  min-height: 880px;
  height: auto;
  padding: 20px;
  align-self: flex-start;

  overflow-y: auto;

  background-color: var(--blueLight);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--primary);
    }
  }
`;

export const MenuContainer = styled.section`
  height: 790px;
  margin-top: 30px;
  background-color: var(--light);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;
`;

export const ItensMenu = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  text-align: left;
  padding-left: 5px;

  background-color: var(--light);

  > a {
    text-decoration: none;
    color: var(--primary);
    font-weight: bold;

    transition: 0.2s;
  }

  > a:hover {
    color: var(--primaryBlack);
    transform: translate(10px);
  }

  img {
    height: 25px;
    width: 25px;
  }
`;
