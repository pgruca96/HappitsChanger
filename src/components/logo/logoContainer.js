import React from 'react';
import srcLogo from "../../assets/punctuality2.png";
import Logo from "./logo";
import { Header } from "../../utils/helpers/styles";
import LogoBox from "./logoContainer.styles";
import Link from '@material-ui/core/Link';

const LogoContainer = () => {
    return ( 
      <Link href="/" color='inherit' underline='none'>
        <LogoBox>
            <Logo src={srcLogo} />
            <Header>
              Welcome
              <br /> in <br />
              HappitsChanger.com
            </Header>
        </LogoBox>
      </Link>
     );
}
 
export default LogoContainer;
