import React from "react";
import styled, { css } from "styled-components/macro";
import icon from "../../assets/icons/icon-error.svg";

export default function Input(props) {
  return (
    <FormGroup>
      <StyledInput />
      {props.children}
    </FormGroup>
  );
}

const borderStyle = {
  correct: "1px inset rgb(0 0 0 / 0.2)",
  error: "1px solid #FF7979",
};

const margin = {
  correct: "2em",
  error: "0",
};

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;
const StyledInput = styled.input.attrs(({ placeholder }) => ({
  placeholder,
}))`
  height: 3.5rem;
  border: ${(prop) => (prop.correct ? borderStyle.correct : borderStyle.error)};
  border-radius: 5px;
  margin-bottom: ${(prop) => (prop.correct ? margin.correct : margin.error)};
  padding-left: 1.6em;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.1rem;
  display: inline-flex;
  padding-right: 30px;

  ${(prop) =>
    !prop.correct &&
    css`
      background-image: url(${icon});
      background-size: 1rem 1rem;
      background-repeat: no-repeat;
      background-position: 95%;
    `}

  &:focus {
    outline: none !important;
    border: 1px solid #5e54a4;
  }
  &::placeholder {
    color: ${(prop) => prop.placeholder === "email@example.com" && "#FF7979"};
  }
`;
