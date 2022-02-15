import React from "react";
import Layout from "../components/Container";
import Container from "../components/Container";
import {
  Card,
  StyledForm,
  FormGroup,
  Input,
  Error,
  Button,
} from "../components/Form";
import { validations } from "../validations/formValidations";
import useForm from "../hooks/useForm";

const onSubmit = () => {
  console.log("user Submitted");
  alert("User submitted");
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

export default function ForgotPassword() {
  const { data, errors, handleSubmit, handleChange } = useForm({
    validations,
    onSubmit,
  });
  return (
    <Container gridArea="multi">
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
