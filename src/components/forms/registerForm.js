import React, { useState, useRef} from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';
import { useForm, Controller } from "react-hook-form";

const FormTextField = styled(TextField)`
  && {
    width: 100%;
  }
`;
const FormButton = styled(Button)`
  && {
    width: 100%;
  }
`

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: ""
  })

  const { register, handleSubmit, formState: { errors }, watch, control  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleChangeFieldText = (e) => setFormValues({...formValues, [e.target.name]: e.target.value});

  const onSubmit = values => console.log(values);
  const returnErrorMessage = (handle) => {
    if(errors[`${handle}`].type === "required") return `${handle} is required!`;
    if(errors[`${handle}`].type === "minLength") return `${handle} is too short!`;
    if(errors[`${handle}`].type === "maxLength") return `${handle} is too long!`;
    if(errors[`${handle}`].type === "pattern") return`"${handle} is not correct!`;
    if(errors[`${handle}`].type === "validate" && handle === "confirmedCheckbox") return `This checkbox is required!`;
    if(errors[`${handle}`].type === "validate") return `Passwords is not the same!`;
  }

  const emailValidate = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormTextField
                id="firstname"
                name="firstname"
                label="First name*"
                placement="top"
                variant="outlined"
                autoComplete="fname"
                autoFocus
                onChange={handleChangeFieldText}
                {...register("Firstname", 
                  { 
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /[a-zA-Z]+$/
                  })
                }
                error={errors.Firstname}
                helperText={errors.Firstname && returnErrorMessage("Firstname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormTextField
                id="lastname"
                name="lastname"
                label="Last name*"
                placement="top"
                variant="outlined"
                autoComplete="lname"
                onChange={handleChangeFieldText}
                {...register("Lastname", 
                  { 
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /[a-zA-Z]+$/
                  })
                }
                error={errors.Lastname}
                helperText={errors.Lastname && returnErrorMessage("Lastname")}
              />
            </Grid>
            <Grid item xs={12}>      
              <FormTextField
                id="emal"
                name="email"
                // inputRef={register()}
                label="Email address*"
                variant="outlined"
                autoComplete="email adress"
                onChange={handleChangeFieldText}
                {...register("Email", 
                  { 
                    required: true,
                    pattern: emailValidate
                  })
                }
                error={errors.Email}
                helperText={errors.Email && returnErrorMessage("Email")}
              />
            </Grid> 
            <Grid item xs={12}>
              <FormTextField
                id="password"
                name="password"
                label="Password*"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={handleChangeFieldText}
                {...register("Password", 
                  { 
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })
                }
                error={errors.Password}
                helperText={errors.Password && returnErrorMessage("Password")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                id="repeatPassword"
                name="repeatPassword"
                // inputRef={register()}
                label="Repeat your password*"
                variant="outlined"
                type="password"
                autoComplete="repeat-password"
                onChange={handleChangeFieldText}
                {...register("repeatPassword", 
                  { 
                    required: true,
                    validate: value => value === watch("Password")
                  })
                }
                error={errors.repeatPassword}
                helperText={errors.repeatPassword && returnErrorMessage("repeatPassword")}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl error={errors.confirmedCheckbox}>
                <label>
                  <input
                    {...register("confirmedCheckbox", {
                      required: true
                    })}
                    name="confirmedCheckbox"
                    value={false}
                    type="checkbox"
                  />
                  I want to receive inspiration, marketing promotions and updates via email.
                </label>
              {<FormHelperText>{errors.confirmedCheckbox && returnErrorMessage("confirmedCheckbox")}</FormHelperText>}
              </FormControl>
              {/* <FormControl 
                error={errors.confirmedCheckbox}
                component="fieldset" 
                
              >
                <FormControlLabel
                  control={
                    <Controller
                      name="confirmedCheckbox"
                      control={control}  
                      rules={{ required: true }}
                      render={(props) => (
                        <Checkbox
                          {...props}
                          checked={props.value}
                          onChange={handleCheckRules}
                          {...register("confirmedCheckbox", {
                            required: true
                          })}
                          // name="confirmedCheckbox"
                          color="primary"

                        />
                      )}
  
                    />  
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  /> */}
                {/* <FormHelperText>{errors.confirmedCheckbox && returnErrorMessage("confirmedCheckbox")}</FormHelperText>
              </FormControl> */}
            </Grid>
            <Grid item xs={12}>      
              <FormButton variant="contained" color="primary" type="submit">
                Register now
              </FormButton>
            </Grid>
          </Grid>
        </form>      

  );
};

export default RegisterForm;
