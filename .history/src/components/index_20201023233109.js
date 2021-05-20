import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useStyles } from "../styles/Form";

const LoginForm = () => {
  const { form, margin } = useStyles();
  return (
    <Dialog
      //   onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={true}
    >
      <form className={form}>
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
        <Button variant="contained" color="primary">
          Zaloguj się
        </Button>
      </form>
    </Dialog>
  );
};

export default LoginForm;
