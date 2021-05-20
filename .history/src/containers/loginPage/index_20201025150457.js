import React from "react";
import LoginFormContainer from "../loginPage/LoginFormContainer";
import { LoginPageContainer } from "../../styles/LoginPage";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginPageContainer>
          <Grid item xs={3}>
            <LoginFormContainer />
          </Grid>
        </LoginPageContainer>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
