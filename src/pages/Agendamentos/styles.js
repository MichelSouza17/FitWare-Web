import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--light);
`;

export const ContainerAgendamentos = styled.div`
  width: 80vw;
  min-height: 500px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);
`;

export const Title = styled.div`
  width: 50%;
  height: 30px;
  display: flex;
  margin-top: -320px;
  margin-left: -10px;

  align-self: flex-start;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px;

  h4 {
    font-size: 15px;
    text-align: center;
    overflow: hidden;
    padding-left: 300px;
    padding-top: 6px;
  }
`;
