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
          <p>
            <b>Try it free 7 days</b> then $20/mo thereafter
          </p>
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
        </FormBox>
      </FormSection>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  background-color: #ff7979;
  background-image: url(${img});
  width: 375px;
  display: grid;
  grid-template-rows: 2fr auto 3fr;
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
  align-self: end;
`;

const FormSection = styled.div`
  grid-area: FormWrapper;
  justify-self: center;
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
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  border-radius: 0.625em;
  box-shadow: 3px 3px 0 rgb(0 0 0 / 0.2), inset 0 1px 3px rgb(0 0 0 / 0.25);

  form {
    width: 17.4rem;
    margin-top: 1.2em;
    margin-bottom: 1.87em;
  }

  form > input {
    width: 100%;
    height: 3.5rem;
    border: 1px inset rgb(0 0 0 / 0.2);
    border-radius: 5px;
    margin-bottom: 1em;
    padding-left: 1.6em;
    font-weight: 600
    font-size: 0.875rem;
    letter-spacing: 0.1rem;
  }

  form > button {
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
  }

  form > p {
    font-size: 0.6875rem;
    text-align: center;

    span {
      font-weight: 700;
      color: #ff7979;
    }
  }
`;
