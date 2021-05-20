import React from "react";
import logo from "../assets/punctuality.png";
import styled from "styled-components";

const Logo = ({ color }) => {
  const Img = styled.img`
    height: 80%;
    color: white;
  `;
  return <Img src={logo} alt="logo" />;
};

export default Logo;
