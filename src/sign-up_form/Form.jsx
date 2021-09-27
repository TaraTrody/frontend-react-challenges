import React from "react";
import styled from "styled-components";
import useForm from "./useForm";

const Form = () => {
  const { data, errors, handleSubmit, handleChange } = useForm({
    validations: {
      firstName: {
        required: {
          value: true,
          message: "First Name cannot be empty",
        },
        pattern: {
          value: "^[A-Za-z]*$",
          message: "Only letters allowed",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Last Name cannot be empty",
        },
        pattern: {
          value: "^[A-Za-z]*$",
          message: "Only letters allowed",
        },
      },
      email: {
        required: {
          value: true,
          message: "Email cannot be empty",
        },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Looks like this is not an email",
        },
      },
      password: {
        required: {
          value: true,
          message: "Password cannot be empty",
        },
        custom: {
          isValid: (value) => value.length >= 8,
          message: "Password needs to be at least 8 characters",
        },
      },
    },
    onSubmit: () => alert("User submitted"),
  });

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <StyledInput
          correct={!errors.firstName && true}
          type="text"
          id="firstName"
          placeholder="Jonathan "
          value={data.firstName || ""}
          onChange={handleChange("firstName")}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <StyledInput
          correct={!errors.lastName && true}
          type="text"
          id="lastName"
          placeholder="Last Name"
          value={data.lastName || ""}
          onChange={handleChange("lastName")}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <StyledInput
          correct={!errors.email && true}
          type="email"
          id="email"
          placeholder="Email Address"
          value={data.email || ""}
          onChange={handleChange("email")}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <StyledInput
          correct={!errors.password && true}
          type="password"
          id="password"
          placeholder="Password"
          value={data.password || ""}
          onChange={handleChange("password")}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </FormContainer>
  );
};

export default Form;

const inputBorder = {
  correct: "rgb(0 0 0 / 0.2)",
  error: "#FF7979",
};

const FormContainer = styled.div`
  background-color: #fff;
  width: 80%;
  min-height: 30rem;
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

  form > .error {
    color: #ff7979;
    justify-self: end;
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

const StyledInput = styled.input`
  width: 100%;
  height: 3.5rem;
  border-width: 1px;
  border-style: inset; 
  border-color: ${(prop) =>
    prop.correct ? inputBorder.correct : inputBorder.error};
  border-radius: 5px;
  margin-bottom: 2em;
  padding-left: 1.6em;
  font-weight: 600
  font-size: 0.875rem;
  letter-spacing: 0.1rem;
`;
