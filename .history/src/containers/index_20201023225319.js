import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <form>
      <TextField
        className={classes.margin}
        id="username"
        label="username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.margin}
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
      <Button variant="contained" color="secondary"></Button>
    </form>
  );
};

export default LoginForm;
