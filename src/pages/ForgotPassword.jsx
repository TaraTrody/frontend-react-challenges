import React from "react";
import Container from "../components/Container";
import Layout from "../components/Container";
import {
  Card,
  StyledForm,
  FormGroup,
  Input,
  Error,
  Button,
} from "../components/Form";
import useForm from "../hooks/useForm.ts";

import { validation } from "../validations/formValidations";

export default function ForgotPassword() {
  const { data, errors, handleSubmit, handleChange } = useForm(validation);

  return (
    <Container gridArea="single">
      <Layout>
        <Card width="40%">
          <StyledForm onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Input
                correct={!errors.email && true}
                type="email"
                id="email"
                placeholder={
                  errors.email ? "email@example.com" : "Email Address"
                }
                value={data.email || ""}
                onChange={handleChange("email")}
              />
              {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>
            <Button type="submit">Retrieve Password</Button>
          </StyledForm>
        </Card>
      </Layout>
    </Container>
  );
}
