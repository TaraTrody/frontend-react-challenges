import React from "react";
import styled from "styled-components/macro";
import img from "../assets/images/bg-intro-mobile.png";

export default function Container(props) {
  return <Background {...props}>{props.children}</Background>;
}

const gridStyle = {
  multi: {
    mobile: "2fr auto 3fr",
    desktop: { col: "50% 50%", row: "25% 75%" },
  },
  single: "1fr",
};

const Background = styled.div`
  background-color: #ff7979;
  background-image: url(${img});
  min-width: 375px;
  display: grid;
  grid-template-rows: ${(prop) =>
    prop.gridAreas === "multi" ? gridStyle.multi.mobile : gridStyle.single};
  justify-content: center;
  align-items: center;

  @media (min-width: 786px) {
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-columns: ${(prop) =>
      prop.gridAreas === "multi"
        ? gridStyle.multi.desktop.col
        : gridStyle.single};
    grid-template-rows: ${(prop) =>
      prop.gridAreas === "multi"
        ? gridStyle.multi.desktop.row
        : gridStyle.single};
    overflow: auto;
  }
`;
