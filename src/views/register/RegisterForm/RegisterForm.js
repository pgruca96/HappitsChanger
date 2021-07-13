import React from "react";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import FormHelperText from '@material-ui/core/FormHelperText';
import { useForm } from "react-hook-form";
import { createUser } from "../../../services/firebase";
import { useHistory } from "react-router-dom"
import { returnErrorMessage, emailValidate } from "../../../utils/helpers/validation.helpers"


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

const RegisterForm = ({isEmailExist}) => {
  const { register, handleSubmit, formState: { errors }, watch  } = useForm();
  const history = useHistory();

  const onSubmit = async (values) => await createUser(values.Email, values.Password).then(() => history.push("/"));

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
                {...register("Firstname", 
                  { 
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /[a-zA-Z]+$/
                  })
                }                           
                error={errors.Firstname}
                helperText={errors.Firstname && returnErrorMessage(errors, "Firstname")}
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
                {...register("Lastname", 
                  { 
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                    pattern: /[a-zA-Z]+$/
                  })
                }
                error={errors.Lastname}
                helperText={errors.Lastname && returnErrorMessage(errors,"Lastname")}
              />
            </Grid>
            <Grid item xs={12}>      
              <FormTextField
                id="email"
                name="email"
                label="Email address*"
                variant="outlined"
                autoComplete="email adress"
                {...register("Email", 
                  { 
                    required: true,
                    pattern: emailValidate
                  })
                }
                error={errors.Email}
                helperText={(errors.Email && returnErrorMessage(errors,"Email")) || (isEmailExist && returnErrorMessage(errors,"isExist"))}
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
                {...register("Password", 
                  { 
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })
                }                
                error={errors.Password}
                helperText={errors.Password && returnErrorMessage(errors,"Password")}
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
                {...register("repeatPassword", 
                  { 
                    required: true,
                    validate: value => value === watch("Password")
                  })
                }               
                error={errors.repeatPassword}
                helperText={errors.repeatPassword && returnErrorMessage(errors,"repeatPassword")}
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
              {<FormHelperText>{errors.confirmedCheckbox && returnErrorMessage(errors,"confirmedCheckbox")}</FormHelperText>}
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
