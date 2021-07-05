import styled from "styled-components";

export const Container = styled.div`
  min-width: 140px;
  width: auto;
  position: relative;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 27px;
    font-size: 17px;
    border-radius: 4px;
    /* border: 1px solid; */
    opacity: 60%;
  }
  label {
    /* font-weight: bold; */
  }
`;
