import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/Form";
import { Header } from "../../styles/h2";

const LoginForm = () => {
  const { form, margin } = useStyles();
  return (
    <form className={form}>
      <Header className={margin}>Welcome in HappitsChanger.com</Header>
      <div>
        <TextField
          className={margin}
          id="username"
          label="username"
          placement="top"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={margin}
          id="password"
          label="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" className={margin}>
          Zaloguj się
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
