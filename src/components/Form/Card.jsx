import React from "react";
import styled from "styled-components/macro";

const Card = (props) => <FormContainer>{props.children}</FormContainer>;

export default Card;

const FormContainer = styled.div`
  background-color: #fff;
  width: 75%;
  color: #3d3b48;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625em;
  box-shadow: 3px 3px 0 rgb(0 0 0 / 0.2), inset 0 1px 3px rgb(0 0 0 / 0.25);
  overflow: auto;

  @media (min-width: 786px) {
    width: 75%;
  }
`;
