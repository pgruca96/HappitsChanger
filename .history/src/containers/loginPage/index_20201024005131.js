import React from "react";
import LoginForm from "../../components/index";
import { loginPageContainer } from "../../styles/LoginPage";

const LoginPage = () => {
  return (
    <div className={loginPageContainer}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
