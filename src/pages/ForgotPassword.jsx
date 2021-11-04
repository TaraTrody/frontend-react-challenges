import React from "react";
import Container from "../components/Container";
import { Card, StyledForm, FormGroup, Input, Error } from "../components/Form";
import useForm from "../hooks/useForm.ts";
import { validation } from "../validations/formValidations";

const onSubmit = () => console.log("submitted!!!");

export default function ForgotPassword() {
  const { data, errors, handleSubmit, handleChange } = useForm(
    validation,
    onSubmit
  );
  return (
    <Container>
      <Card>
        <StyledForm onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <Input
              correct={!errors.email && true}
              type="email"
              id="email"
              placeholder={errors.email ? "email@example.com" : "Email Address"}
              value={data.email || ""}
              onChange={handleChange("email")}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>
        </StyledForm>
      </Card>
    </Container>
  );
}
