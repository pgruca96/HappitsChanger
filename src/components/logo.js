import React from "react";

import styled from "styled-components";

const Logo = ({ src }) => {
  const Img = styled.img`
    min-height: 100px;
    height: 80%;
    color: white;
  `;
  return <Img src={src} alt="logo" />;
};

export default Logo;
