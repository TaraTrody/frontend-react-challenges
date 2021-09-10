import React from "react";
import styled from "styled-components";
import img from "../assets/images/bg-intro-mobile.png";

const Signup = () => {
  return (
    <Container>
      <Overlay>
        <TitleText>
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problem in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is valuable
          </p>
        </TitleText>
        <TryItBox>
          <p>Try it free 7 days then $20/mo thereafter</p>
        </TryItBox>
      </Overlay>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: grid
  background-color: rgba(255, 121, 121, 1);
  width: 375px;
  height: 100vh;
`;

const Overlay = styled.div`
  background: url(${img});
  width: 100%;
  height: 100%;
`;

const TitleText = styled.div`
  margin: 6.25em 1.56em 1.56em 3.125em;
  color: #fff;

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 500;
  }
`;

const TryItBox = styled.div`
  background-color: #5e54a4;
  width: 151px;
  height: 79px;
  color: #fff;
`;
