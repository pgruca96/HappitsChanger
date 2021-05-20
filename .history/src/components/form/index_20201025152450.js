import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../styles/Form";
import { Header } from "../../styles/h2";
import { ColumnCenter } from "../../styles/columnCenter";

const LoginForm = () => {
  const { form } = useStyles();
  return (
    <form className={form}>
      <Header>
        Welcome
        <br /> in <br />
        HappitsChanger.com
      </Header>
      <ColumnCenter>
        <TextField
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
        <Button variant="contained" color="primary">
          Zaloguj się
        </Button>
      </ColumnCenter>
    </form>
  );
};

export default LoginForm;
