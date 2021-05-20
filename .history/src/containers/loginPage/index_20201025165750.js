import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import { loginTheme } from "../../styles/colors";
import { Grid, Box } from "@material-ui/core";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container>
        <Grid container item xs={12} sm={6} alignItems="stretch">
          <Grid item xs={12}>
            <Box bgcolor={loginTheme}>
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
