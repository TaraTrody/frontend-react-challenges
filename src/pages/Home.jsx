import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import {
  Card,
  Button,
  Error,
  Input,
  StyledForm,
  Terms,
  FormGroup,
} from "../components/Form";
import { validation } from "../validations/formValidations";
import useForm from "../hooks/useForm.ts";
import useWindowSize from "../hooks/useWindowSize.ts";

const onSubmit = () => console.log("submitted!!!");

export default function Home() {
  const { data, errors, handleSubmit, handleChange } = useForm(
    validation,
    onSubmit
  );
  const clientWidth = useWindowSize();
  console.log(clientWidth);
  return (
    <Container gridAreas="multi">
      <Layout>
        <Card>
          <StyledForm onSubmit={handleSubmit} noValidate>
            <FormGroup>
              <Input
                correct={!errors.firstName && true}
                type="text"
                id="firstName"
                placeholder={errors.firstName ? "" : "First Name"}
                value={data.firstName || ""}
                onChange={handleChange("firstName")}
              />
              {errors.firstName && <Error>{errors.firstName}</Error>}
            </FormGroup>
            <FormGroup>
              <Input
                correct={!errors.lastName && true}
                type="text"
                id="lastName"
                placeholder={errors.lastName ? "" : "Last Name"}
                value={data.lastName || ""}
                onChange={handleChange("lastName")}
              />
              {errors.lastName && <Error>{errors.lastName}</Error>}
            </FormGroup>
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
            <Button type="submit">CLAIM YOUR FREE TRIAL</Button>
            <Terms />
          </StyledForm>
        </Card>
      </Layout>
    </Container>
  );
}
