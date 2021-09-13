import React from "react";
import styled from "styled-components";
import img from "../assets/images/bg-intro-mobile.png";

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
          <p>Try it free 7 days then $20/mo thereafter</p>
        </Box>
      </BoxSection>
      <FormSection>
        <FormBox>
          <form action="">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="button">CLAIM YOUR FREE TRIAL</button>
            <p>
              By clicking the button, you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </form>
      </FormSection>
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

const TitleSection = styled.div`
  grid-area: TitleWrapper;
  display: flex;
`;

const BoxSection = styled.div`
  grid-area: BoxWrapper;
  justify-self: center;
`;

const FormSection = styled.div`
  grid-area: FormWrapper;
`;

const TitleText = styled.div`
  width: 20.4rem;
  color: #fff;
  text-align: center;
  margin: 5.3rem auto;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.02rem;
  }

  p {
    font-weight: 500;
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
    width: 250px;
    margin: auto;
    text-align: center;
  }
`;

const FormBox = styled.div`
  background-color: #fff;
  width: 20.4rem;
  color: #3d3b48;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 0.625em;
  box-shadow: 0 8px 0 rgb(0 0 0 / 0.2), inset 0 1px 3px rgb(0 0 0 / 0.25);
`;
