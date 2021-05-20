import React from "react";
import { LoginPageContainer } from "../../styles/LoginPage";
import LoginForm from "../../components/form/index";
import { loginTheme } from "../../styles/colors";
import Grid from "@material-ui/core/Grid";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <Grid container direction="row" justify="flex-end">
        <Grid item xs={12} sm={6} style={{ background: "#f2f2f2" }}>
          <Box color={loginTheme}>
            <LoginForm />
          </Box>
        </Grid>
      </Grid>
    </LoginPageContainer>
  );
};

export default LoginPage;
