import React from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../../utils/helpers/styles";
import { logIn } from "../../../store/actions/auth";
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form";
import { returnErrorMessage, emailValidate } from "../../../utils/helpers/validation.helpers";


const LoginForm = () => {
  const { form } = useStyles();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }} = useForm();
  const history = useHistory();

  const onSubmit = (values) => dispatch(logIn(values.Email, values.Password)).then(() => {
    debugger;
    history.push("/main")
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={form}>
      <TextField
        id="username"
        name="username"
        label="username"
        placement="top"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        {...register("Email", 
          { 
            required: true,
            pattern: emailValidate
          })
        }
        error={errors.Email}
        helperText={errors.Email && returnErrorMessage(errors,"Email")}
      />
      <TextField
        id="password"
        name="password"
        label="password"
        type="password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        {...register("Password")}                
        error={errors.Password}
        helperText={errors.Password && returnErrorMessage(errors,"Password")}
      />
      <Button variant="contained" color="primary" type="submit">
        Zaloguj si??
      </Button>
    </form>
  );
};

export default LoginForm;
