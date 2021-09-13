import React from "react";
import styled from "styled-components";
import img from "../assets/images/bg-intro-mobile.png";

const Signup = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleText>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problem in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is valuable
          </p>
        </TitleText>
      </TitleWrapper>
      <BoxWrapper>
        <Box>
          <p>Try it free 7 days then $20/mo thereafter</p>
        </Box>
      </BoxWrapper>
      <FormWrapper></FormWrapper>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  background-color: #ff7979;
  background-image: url(${img});
  width: 375px;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-areas:
    "TitleWrapper"
    "BoxWrapper"
    "FormWrapper";
  justify-content: center;
`;

const TitleWrapper = styled.div`
  grid-area: TitleWrapper;
  display: flex;
`;

const BoxWrapper = styled.div`
  grid-area: BoxWrapper;
  justify-self: center;
`;

const FormWrapper = styled.div`
  grid-area: FormWrapper;
`;

const TitleText = styled.div`
  color: #fff;
  text-align: center;
  margin: auto;

  h1 {
    margin-bottom: 1rem;
  }
`;

const Box = styled.div`
  background-color: #5e54a4;
  width: 20.4rem;
  height: 5rem;
  color: #fff;
  display: flex;
  align-content: center;

  p {
    width: 250px;
    margin: auto;
    text-align: center;
  }
`;
