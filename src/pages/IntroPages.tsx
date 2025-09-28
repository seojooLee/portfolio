import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
const IntroPages = () => {
  return (
    <ScreenWrapper>
      <Button text="Start" />
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export default React.memo(IntroPages);
