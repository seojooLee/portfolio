import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

const Button = ({
  text = "Button",
  onClick,
  disabled,
  style,
  className,
  children,
}: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export default React.memo(Button);
