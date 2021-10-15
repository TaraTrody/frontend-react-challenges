import React from "react";
import styled from "styled-components/macro";

export default function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: #38cc8b;
  color: #fff;
  width: 100%;
  height: 3.5rem;
  border-radius: 5px;
  box-shadow: 3px 3px 0 rgb(56, 204, 139, 0.2),
    inset 0 1px 3px rgb(0 0 0 / 0.25);
  margin-bottom: 1em;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;
