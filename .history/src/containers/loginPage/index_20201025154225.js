import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    // <Grid container>

    <LoginPageContainer>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </LoginPageContainer>

    // </Grid>
  );
};

export default LoginPage;
