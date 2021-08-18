import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const TimePicker = ({
  numberOfClasses,
  selectedTime,
  handleTimeChange,
  classes,
  disabled,
}) => {
  const type = numberOfClasses.toLowerCase();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label={`Hour of ${type} classes`}
          value={selectedTime}
          onChange={handleTimeChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          className={classes}
          disabled={disabled}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default TimePicker;
