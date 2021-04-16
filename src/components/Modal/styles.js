import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 144vh;
  z-index: 999;

  background-color: #000c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  min-width: 60%;
  min-height: 60%;
  max-height: calc(100vh -20px);
  padding: 15px;


  background-color: var(--light);

  border-radius: 4px;

  position: relative;

  z-index: 999;

  overflow-y: auto;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 0.2s;

    :hover {
      color: var(--BlueLight);
    }

    > Input {
      justify-content: center;
      align-items: center;
      margin-left: 50%;
    }
  }

  > header {
    font-size: 24px;
    text-align: center;
    padding: 20px;
    margin: 20px 20px 20px 30px;
    border-bottom: solid 2px var(--BlueLight);
  }
`;
