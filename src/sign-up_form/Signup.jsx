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
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "TitleWrapper"
    "BoxWrapper"
    "FormWrapper";
`;

// const Overlay = styled.div`
//   background: url(${img});
//   width: 100%;
//   height: 100%;
// `;

const TitleWrapper = styled.div`
  grid-area: TitleWrapper;
  align-self: center;
`;

const BoxWrapper = styled.div`
  grid-area: BoxWrapper;
`;

const FormWrapper = styled.div`
  grid-area: FormWrapper;
`;

const TitleText = styled.div`
  color: #fff;
  text-align: center;

  h1 {
    // font-weight: 700;
  }

  p {
    // font-weight: 500;
  }
`;

const Box = styled.div`
  background-color: #5e54a4;
  width: 151px;
  height: 79px;
  color: #fff;
`;
