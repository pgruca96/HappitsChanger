import React from 'react';
import styled from "styled-components";
import srcLogo from "../../assets/punctuality2.png";
import Logo from "../logo";
import { Header } from "../../styles/h2";

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  height: 30%;
  max-height: 200px;
  margin: 5vh;
`;

const LogoContainer = () => {
    return ( 
        <LogoBox>
            <Logo src={srcLogo} />
            <Header>
              Welcome
              <br /> in <br />
            </Header>
            <Header width="100%">HappitsChanger.com</Header>
        </LogoBox>
     );
}
 
export default LogoContainer;
