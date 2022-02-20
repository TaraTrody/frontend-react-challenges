import React from "react";
import Container from "../components/Container";
import styled from "styled-components/macro";

export default function Profile() {
  const user = "Tara";
  return (
    <Container gridAreas={"single"}>
      <Text>Welcome Back, {user}</Text>
    </Container>
  );
}

const Text = styled.h1``;
