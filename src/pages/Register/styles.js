import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 200vh;

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;

    filter: blur(4px);

    z-index: -1;
    background-color: #DADADA;
  }
`;

export const ContainerUser = styled.div`

width: 80vw;
height: 50vh;

display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
    top: 5vh;
    left: 10;
    

  background-color: white;
`;

export const ContainerContacts = styled.div`

width: 40vw;
height: 50vh;
margin-right: 20px;

display: flex;
  justify-content: left;
  align-items: center;

  background-color: white;
`;

export const ContainerAddress = styled.div`

width: 40vw;
height: 50vh;


display: flex;
  justify-content: right;
  align-items: center;

  background-color: white;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 20px;
  border-radius: 4px 4px 0px 0px;

  background-color: #C4C4C4;
  box-shadow: 0px 2px 4px black;

 

  > h2 {
    font-size: 18px;
    text-align: center;
  }
`;


