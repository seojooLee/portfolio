import styled from "styled-components";
import Button from "../components/Button";
import React = require("react");
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
`;

export default React.memo(IntroPages);
