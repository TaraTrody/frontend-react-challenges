import React from "react";
import styled from "styled-components";

export default function FormGroup(props) {
  return <StyledFormGroup>{props.children}</StyledFormGroup>;
}

const StyledFormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;
