import React from "react";
import LoginForm from "../../components/form/index";
import { loginPageContainer, LoginPageContainer } from "../../styles/LoginPage";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
