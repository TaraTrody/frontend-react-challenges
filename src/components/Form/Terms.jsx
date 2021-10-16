import React from "react";
import styled from "styled-components";

export default function Terms() {
  return (
    <Text>
      By clicking the button, you are agreeing to our{" "}
      <span>Terms and Services</span>
    </Text>
  );
}
const Text = styled.p`
  font-size: 0.6875rem;
  text-align: center;

  span {
    font-weight: 700;
    color: #ff7979;
  }
`;
