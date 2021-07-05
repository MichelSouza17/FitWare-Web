import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 101vh;
  z-index: 9;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 80px;
  min-height: 80px;
  position: absolute;

  border-top: 5px solid var(--blueLight);
  border-right: 5px solid;
  border-left: 5px solid;

  border-bottom: 5px solid;

  border-radius: 50%;

  animation: ${spin} 2s linear infinite;
`;
