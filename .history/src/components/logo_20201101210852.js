import React from "react";

import styled from "styled-components";

const Logo = ({ src }) => {
  const Img = styled.img`
    height: 80%;
    color: white;
  `;
  return <Img src={logo} alt="logo" />;
};

export default Logo;
