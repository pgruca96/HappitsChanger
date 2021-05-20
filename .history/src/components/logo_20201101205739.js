import React from "react";
import logo from "../assets/punctuality.png";
import styled from "styled-components";

const Logo = () => {
  const Img = styled.img`
    min-height: 50px;
  `;
  return <Img src={logo} alt="logo" />;
};

export default Logo;
