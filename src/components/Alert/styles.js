import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 0px;
  height: 50px;
  margin: 10px;

  transition: width 0.4s;

  border-radius: 4px;
  background-color: ${(props) =>
    props.type === "error" ? "#5D61BB;" : "#ffffff"};

  white-space: nowrap;
  overflow: hidden;

  > h1 {
    font-size: 17px;
    margin: 15px;
    color: #ffffff;
    font-style: normal;
  }

  > p {
    font-size: 14px;
    margin-left: 5px;
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
