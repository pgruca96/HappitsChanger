import React from "react";
import LoginFormContainer from "../loginPage/LoginFormContainer";
import { LoginPageContainer } from "../../styles/LoginPage";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    <Grid container>
      <LoginPageContainer>
        <LoginFormContainer />
      </LoginPageContainer>
    </Grid>
  );
};

export default LoginPage;
