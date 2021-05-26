import styled from "styled-components";
import background from "../assets/login-background.jpg";
import { loginAndRegisterTheme } from "./colors";

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background: url(${background}) left;
  min-width: 100vw;
  min-height: 100vh;
`;

export const RegisterPageContainer = styled.div`
  background: ${loginAndRegisterTheme};
  min-width: 100vw;
  min-height: 100vh;
`;
