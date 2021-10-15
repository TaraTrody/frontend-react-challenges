import React from "react";
import styled from "styled-components";

export default function Error(props) {
  return <Message>{props.children}</Message>;
}

const Message = styled.p`
  color: #ff7979;
  text-align: end;
  font-size: 0.68em;
  margin-bottom: 1em;
`;
