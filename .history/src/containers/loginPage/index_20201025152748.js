import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginPageContainer>
          <Grid item xs={12} sm={6} alignContent>
            <LoginForm style={{ height: "inherit" }} />
          </Grid>
        </LoginPageContainer>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
