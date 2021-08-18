import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const DatePicker = ({ operation, selectedDate, handleDateChange, classes }) => {
  const type = operation.toLowerCase();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id={`${type}DatePickerInline`}
          label={`The day you ${operation} grinding the habit`}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': `change ${operation} date`,
          }}
          className={classes}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;