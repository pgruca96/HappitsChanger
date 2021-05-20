import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import { loginTheme } from "../../styles/colors";
import { Grid, Box } from "@material-ui/core";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container>
        <Box bgcolor={loginTheme}>
          <Grid container item xs={12} sm={6}>
            <LoginForm />
          </Grid>
        </Box>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
