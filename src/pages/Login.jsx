import React from "react";
import Layout from "../components/Layout";
import {
  Card,
  StyledForm,
  FormGroup,
  Input,
  Error,
  Button,
} from "../components/Form";
import Container from "../components/Container";
import useForm from "../hooks/useForm";
import { validations } from "../validations/formValidations";

export default function Register() {
  const { data, errors, handleSubmit, handleChange } = useForm({ validations });
  return (
    <Container gridAreas="multi">
      <Layout>
        <Card>
          <StyledForm onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                correct={!errors.email && true}
                type="email"
                id="email"
                placeholder={errors.email ? "" : "Email Address"}
                value={data.email || ""}
                onChange={handleChange("email")}
              />
              {errors.email && <Error>{errors.email}</Error>}
            </FormGroup>
            <FormGroup>
              <Input
                correct={!errors.password && true}
                type="password"
                id="password"
                placeholder={errors.password ? "" : "Password"}
                value={data.password || ""}
                onChange={handleChange("password")}
              />
              {errors.password && <Error>{errors.password}</Error>}
            </FormGroup>
            <Button type="submit">LOGIN</Button>
          </StyledForm>
        </Card>
      </Layout>
    </Container>
  );
}
