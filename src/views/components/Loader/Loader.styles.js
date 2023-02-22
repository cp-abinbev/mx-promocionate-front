import styled, { keyframes } from "styled-components";

const movimiento = keyframes`
  0% 
  {top: 8px;height: 64px;}
  50%, 100% { top: 24px; height: 32px;}
`;

export const StyledDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  background-color: rgb(0, 0, 0, 0.17);
  div {
    background-color: white;
    width: 16px;
    animation: ${movimiento} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  & > *:nth-child(1) {
    animation-delay: -0.24s;
  }
  & > *:nth-child(2) {
    animation-delay: -0.12s;
  }
  & > *:nth-child(3) {
    animation-delay: 0s;
  }
`;
