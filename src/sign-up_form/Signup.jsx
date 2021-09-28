import React from "react";
import styled from "styled-components";
import img from "../assets/images/bg-intro-mobile.png";

import Form from "./Form";

const Signup = () => {
  return (
    <Container>
      <TitleSection>
        <TitleText>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problem in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is valuable
          </p>
        </TitleText>
      </TitleSection>
      <BoxSection>
        <Box>
          <p>
            <b>Try it free 7 days</b> then $20/mo thereafter
          </p>
        </Box>
      </BoxSection>
      <FormSection>
        <Form />
      </FormSection>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  background-color: #ff7979;
  background-image: url(${img});
  min-width: 375px;
  display: grid;
  grid-template-rows: 2fr auto 3fr;
  justify-content: center;
  align-items: center;

  @media (min-width: 786px) {
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 75%;
  }
`;

const TitleSection = styled.div`
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 786px) {
    grid-column: 1;
    grid-row: 1 / 3;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const BoxSection = styled.div`
  grid-row: 2;
  justify-self: center;
  width: 100%
  display: flex;

  @media (min-width: 786px) {
    grid-column: 2;
    grid-row: 1;
    height: 100%;
    width: 100%;
    align-items: center;
  }
`;

const FormSection = styled.div`
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: start;

  @media (min-width: 786px) {
    grid-column: 2;
    grid-row: 2;

    align-self: start;
    justify-self: start;
  }
`;

const TitleText = styled.div`
  width: 20.4rem;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  margin: 5.3rem auto;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.75em;
    font-weight: 700;
    letter-spacing: -0.02rem;
  }

  p {
    font-weight: 500;
    font-size: 1em;
    line-height: 26px;
  }

  @media (min-width: 786px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 786px) {
    width: 68%;
    height: 13.75rem;
    text-align: left;

    h1 {
      font-size: 3.125rem;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

const Box = styled.div`
  background-color: #5e54a4;
  width: 20.4rem;
  height: 5rem;
  color: #fff;
  display: flex;
  align-content: center;
  border-radius: 0.625em;
  box-shadow: 3px 3px 0 rgb(0 0 0 / 0.2), inset 0 1px 3px rgb(0 0 0 / 0.25);
  font-size: 0.9rem;

  p {
    width: 68%;
    margin: auto;
    text-align: center;
  }

  @media (min-width: 786px) {
    width: 33.75rem;
  }
`;
