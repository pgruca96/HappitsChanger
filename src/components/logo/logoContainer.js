import React from 'react';
import srcLogo from "../../assets/punctuality2.png";
import Logo from "./logo";
import { Header } from "../../utils/helpers/styles";
import LogoBox from "./logoContainer.styles"

const LogoContainer = () => {
    return ( 
        <LogoBox>
            <Logo src={srcLogo} />
            <Header>
              Welcome
              <br /> in <br />
              HappitsChanger.com
            </Header>
        </LogoBox>
     );
}
 
export default LogoContainer;
