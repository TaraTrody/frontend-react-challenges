import React from "react";
import styled from "styled-components/macro";
import img from "../assets/images/bg-intro-mobile.png";

export default function Container(props) {
  return <Background>{props.children}</Background>;
}

const Background = styled.div`
  background-color: #ff7979;
  background-image: url(${img});
  min-width: 375px;
  display: grid;
  grid-template-rows: 2fr auto 3fr;
  justify-content: center;
  align-items: center;

  @media (min-width: 786px) {
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 75%;
    overflow: auto;
  }
`;
