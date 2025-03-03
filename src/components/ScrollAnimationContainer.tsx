import React, { useEffect } from "react";
import { useScrollEventHooks } from "../hooks/useScrollEventHooks";
import styled, { keyframes } from "styled-components";

type PropsType = {
  children: React.ReactNode;
  args: {
    color: string;
  };
};

export const ScrollAnimationContainer = ({ children }) => {
  const { ref, isInViewport } = useScrollEventHooks();

  return (
    <Container
      ref={ref}
      borderColor={"white"}
      className={isInViewport ? "frame-in" : "frame-out"}
    >
      {children}
    </Container>
  );
};

const frameInAnimation = keyframes`
  0% {
   opacity: 0;
   transform: translateY(0);  
  } 

  100%{
    background-color: black;
    color : white;
    opacity: 1; 
    transform: translateY(100);  

   }
`;

const frameOutAnimation = keyframes`
 0% {
    scale:100%;
    background-color: black;
    color : white;
    opacity: 1; 
  } 

  100%{ 
    scale : 0;
    opacity: 0; 
   }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100vh;
  padding: 1.4rem 2.4rem;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    border: 1px solid blue;
    padding: 1.4rem 0.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    border: 1px solid red;
    padding: 1.4rem 0.4rem;
  }

  /* border: 1px solid ${({ borderColor }) => borderColor}; */

  &.frame-in {
    animation: ${frameInAnimation} 1.3s forwards;
  }

  &.frame-out {
    animation: ${frameOutAnimation} 1.3s forwards;
  }
`;
