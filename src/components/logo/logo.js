import React from "react";

import styled from "styled-components";

const Logo = ({ src }) => {
  const Img = styled.img`
    width: 120px;
    color: white;
    @media (max-width: 960px) {
      width: 100px
    }
  `;
  return <Img src={src} alt="logo" />;
};

export default Logo;
