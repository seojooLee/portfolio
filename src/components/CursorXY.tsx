import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function CursorXY() {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#ffffff53");
  const clickHandler = () => {
    setColor("rgba(197, 201, 255, 0.541)"); // 클릭 시 빨간색으로 변경
    setTimeout(() => {
      setColor("#ffffff53"); // 300ms 후 원래 색으로 복귀
    }, 100);
  };
  useEffect(() => {
    document.body.style.cursor = "none";

    const xyHandler = (e) => {
      setXY({ x: e.clientX, y: e.clientY });
      console.log("e.clientX, e.clientY", e.clientX, e.clientY);
      const pointer = document.getElementById("pointer");
    };

    window.addEventListener("click", clickHandler);
    window.addEventListener("mousemove", xyHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("mousemove", xyHandler);
    };
  }, []);

  return (
    <Cursor onClick={clickHandler}>
      <div
        id="pointer"
        className={`pointer`}
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
          backgroundColor: color,
        }}
      />
    </Cursor>
  );
}

const Cursor = styled.div`
  .pointer {
    cursor: none;
    position: fixed;
    border: 0.3px solid lightgray;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    left: -15px;
    top: -15px;
    z-index: 9999;
    pointer-events: none;
    transition: background-color 0.2s ease; /* 색상 변경 부드럽게 */
  }
`;
