import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <FormContainer>
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
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  background-color: #fff;
  width: 68%;
  color: #3d3b48;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  border-radius: 0.625em;
  box-shadow: 3px 3px 0 rgb(0 0 0 / 0.2), inset 0 1px 3px rgb(0 0 0 / 0.25);

  form {
    width: 85%;
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

  @media (min-width: 786px) {
    width: 68%;  
    

    form {
        width: 85%;
        margin-top: 2em;
    
    }

    
  }
`;
