import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import { loginTheme } from "../../styles/colors";
import { Grid, Box } from "@material-ui/core";
import { LogoContainer } from "./logoContainer";
import { Header } from "../../styles/h2";
import Logo from "../../components/logo";
import srcLogo from "../../assets/punctuality2.png";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container justify="flex-end">
        <Grid container item md={5}>
          <Grid item xs={12}>
            <Box
              bgcolor={loginTheme}
              height={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
            >
              <LogoContainer>
                <Logo src={srcLogo} />
                <Header>
                  Welcome
                  <br /> in <br />
                </Header>
                <Header width="100px">HappitsChanger.com</Header>
              </LogoContainer>
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
