import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    // <FormControl className={classes.margin}>
      <InputLabel htmlFor="username">
        With a start adornment
      </InputLabel>
      <Input
        id="username"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    // </FormControl>
  );
};

export default LoginForm;
