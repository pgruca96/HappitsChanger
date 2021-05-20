import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import { loginTheme } from "../../styles/colors";
import { Grid, Box } from "@material-ui/core";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container justify="flex-end">
        <Grid container item sm={12} md={6}>
          <Grid item xs={12}>
            <Box bgcolor={loginTheme} height={1} display="flex">
              <LoginForm />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
