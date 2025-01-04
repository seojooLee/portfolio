import React, { useEffect } from "react";
import { useScrollEventHooks } from "../hooks/useScrollEventHooks";
import styled, { keyframes } from "styled-components";

type PropsType = {
  children: React.ReactNode;
  args: {
    color: string;
  };
};

export const ScrollAnimationContainer = ({ children, ...args }) => {
  const { ref, isInViewport } = useScrollEventHooks();

  return (
    <Container
      ref={ref}
      borderColor={args.color}
      className={isInViewport ? "frame-in" : ""}
    >
      {children}
    </Container>
  );
};

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-60%);
    scale : 100%;
  }
  50%{
    scale : 80%;

    opacity: 1;
  }

  100%{
    scale:100%;
    background-color: black;
    color : white;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* border: 1px solid ${({ borderColor }) => borderColor}; */
  padding: 1.4rem;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;
