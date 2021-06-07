import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 96vh;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: var(--accentGray);
`;

export const ContainerHome = styled.div`
  width: 60vw;
  min-height: 700px;
  height: auto;
  margin-top: 80px;
  margin-bottom: 20px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--light);

  h3 {
    margin-top: 50px;
  }
`;

export const Title = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  margin-left: -10px;
  flex-direction: row;

  align-self: flex-start;
  background-color: var(--blueLight);
  border: black 1px;
  border-radius: 10px;
`;
export const TitleContainer = styled.div`
  height: 100%;
  width: 90%;

  h4 {
    font-size: 15px;
    text-align: right;
    padding-top: 15px;
    color: var(--light);
  }
`;
