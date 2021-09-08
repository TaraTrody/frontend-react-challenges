import React from "react";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
        <TitleText>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problem in real-time. Watching scripted tutorials is great, but understanding how developers think is valuable</p>
        </TitleText>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: grid;
  width: 375px;
  height: 100vh;
  background: pink;
  opacity: 1;
`;

const TitleText = styled.div`

`;


