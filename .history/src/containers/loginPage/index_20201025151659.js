import React from "react";
// import LoginFormContainer from "../loginPage/LoginFormContainer";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    <Grid container alignContent>
      <Grid item xs={12}>
        <LoginPageContainer>
          <Grid item md={6}>
            <LoginForm />
          </Grid>
        </LoginPageContainer>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
