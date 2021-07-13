import React from "react";
import { LoginPageContainer } from "../../../utils/helpers/styles/Backgrounds";
import LoginForm from "../LoginForm/LoginForm";
import { loginAndRegisterTheme } from "../../../utils/constants/colors";
import { Grid, Box } from "@material-ui/core";
import LogoContainer from "../../../components/logo/logoContainer";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container justify="flex-end">
        <Grid container item md={5}>
          <Grid item xs={12}>
            <Box
              bgcolor={loginAndRegisterTheme}
              height={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <LogoContainer />
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
