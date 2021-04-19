import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  height: auto;
  padding-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--DarkGray);
`;

export const ContainerSlide = styled.div`
  width: 100%;
  min-height: 400px;
  height: auto;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);
`;

export const ContainerUnits = styled.div`
  width: 100%;
  min-height: 250px;
  height: auto;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  background-color: var(--DarkGray);
`;

export const CardUnit = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 0 0.3em black;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ff7171;

  img {
    border: solid 2px black;
    border-radius: 50%;
    margin-bottom: 120px;
    background-color: var(--DarkGray);
    margin-top: -90px;
    position: absolute;
  }
`;

export const ContainerIntroduction = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--DarkGray);
`;

export const Description = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--DarkGray);

  h1 {
    font-size: 22px;
    text-align: center;
    overflow: hidden;
  }

  p {
    text-align: justify;
    margin-top: 15px;
  }
`;

export const ContainerFunctionalities = styled.div`
  width: 900px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;

  background-color: var(--DarkGray);

  img {
    margin: 10px 10px 10px 10px;
  }
`;

export const ContainerBranco = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--light);
`;

export const ContainerSupport = styled.div`
  width: 100%;
  min-height: 200px;
  height: auto;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--DarkGray);

  h1 {
    font-size: 22px;
    text-align: center;
    overflow: hidden;
  }
`;

export const Contacts = styled.div`
  width: 500px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
