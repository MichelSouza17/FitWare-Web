import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 270px;
  height: 100%;
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
  width: 200px;
  height: 500px;
  margin: 30px 10px;

  background-color: var(--light);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;
`;

export const ItensMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  text-align: center;
  justify-content: center;

  background-color: var(--light);
`;
