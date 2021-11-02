import React from "react";
import styled from "styled-components";

export default function Form(props) {
  return <StyledForm {...props}>{props.children}</StyledForm>;
}

const StyledForm = styled.form`
  width: 87.2%;
  margin-bottom: 1.87em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  @media (min-width: 786px) {
    width: 87.2%;
    margin-top: 2em;
  }
`;
