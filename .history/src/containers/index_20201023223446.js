import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const loginForm = () => {
  return (
    <FormControl className={classes.margin}>
      <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default loginForm;
