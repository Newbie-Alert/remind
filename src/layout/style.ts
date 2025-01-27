import styled, { keyframes } from "styled-components";

const Fadein = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
`;

export const MainWrapper = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem 1.4rem;
  animation: ${Fadein} 0.25s ease-in-out;
`;
