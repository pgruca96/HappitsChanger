import React from "react";
import { RegisterPageContainer } from "../../../utils/helpers/styles/Backgrounds";
import RegisterForm from "../RegisterForm/RegisterForm";
import LogoContainer from "../../../components/logo/logoContainer";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
  },
  gridItemLogoXS: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "clamp(20px, 5%, 50px)"
  },
  gridItemLogo: {
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItemForm: {
    padding: "40px",
    display: "flex",
    alignItems: "center",
  }
}));

const RegisterPage = () => {

  const classes = useStyles();
  const isActiveMediaQuery = useMediaQuery("(max-width: 960px)");

  return (
    <RegisterPageContainer>
      <Grid container justify='center' className={classes.root}>
        <Grid item xs={12} md={5} className={isActiveMediaQuery ? classes.gridItemLogoXS : classes.gridItemLogo}>
          <LogoContainer />
        </Grid>
        <Grid item xs={8} md={7} className={!isActiveMediaQuery && classes.gridItemForm}>
          <RegisterForm />
        </Grid>
      </Grid>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
