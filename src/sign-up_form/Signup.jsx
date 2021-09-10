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
      </Overlay>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  background: url(${img});
  background-size: cover;
  display: grid;
  width: 375px;
  height: 100vh;
  
`;

const Overlay = styled.div`
  background: rgb(255, 121, 121, 1);
`;

const TitleText = styled.div`
  margin: 6.25em 1.56em 1.56em 3.125em;

  h1 {
    font-weight: 700;
  }

  p {
    font-weight: 500;
  }
`;
