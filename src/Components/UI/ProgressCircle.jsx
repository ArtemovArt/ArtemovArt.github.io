import React from "react";
import styled from "styled-components";

const StyledCircle = styled.div`    

  }

`;
const ProgressCircle = (props) => {
  return <StyledCircle progr={props.progr}>{props.children}</StyledCircle>;
};

export default ProgressCircle;
