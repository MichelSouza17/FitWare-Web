import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0px;
  height: 60px;
  margin: 10px;

  transition: width 0.4s;
  z-index: 9;

  border-radius: 4px;
  background-color: ${(props) => (props.type === "error" ? "#F00" : "#23B0FF")};

  white-space: nowrap;
  overflow: hidden;

  > h1 {
    font-size: 17px;
    margin: 8px;
    color: #ffffff;
    font-style: normal;
  }

  > p {
    font-size: 14px;
    color: #ffffff;
    margin-left: 10px;
  }

  > span {
    position: absolute;
    top: 2px;
    right: 5px;

    font-size: 20px;

    cursor: pointer;
    transition: 0.1s;

    :hover {
      color: var(--light);
    }
  }
`;
