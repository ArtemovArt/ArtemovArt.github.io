import React, { useState } from "react";
import styled from "styled-components";
//Добавить условную отрисовку, когда при наведении или нажатии внутренний круг полностью закрашивается цветом, а текст становится белым

const StyledLevel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 13px;
  gap: 19px;

  /* Secondary/Green */
  border: 3px solid ${(props) => props.color};
  border-radius: 100px;
  background: ${(props) => props.back};

  &:hover {
    background: ${(props) => props.lighten};
    cursor: pointer;
  }
`;

const Level = (props) => {
  const [clicked, setClicked] = useState(false);
  let back = "";
  if (clicked) back = props.lighten;
  return (
    <StyledLevel
      onClick={() => setClicked(!clicked)}
      back={back}
      {...props}
    >
      {props.children}
    </StyledLevel>
  );
};

export default Level;
