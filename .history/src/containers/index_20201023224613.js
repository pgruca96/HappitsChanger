import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.margin}
      id="username"
      label="username"
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default LoginForm;
