import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField,
  ListItemText,
  ListItemIcon,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  ListItemWrapper,
  CreateHabitInfoContainer,
  useStyles,
} from './CreateHabitInfo.styles';
import { Header } from '../../../../../utils/helpers/styles/h2';
import { habitCategories } from '../../../../../utils/constants/habitCategories';

const categories = habitCategories.map(({ name, icon }) => (
  <MenuItem value={name} key={name}>
    <ListItemWrapper>
      <ListItemText primary={name} />
      <ListItemIcon>{icon()}</ListItemIcon>
    </ListItemWrapper>
  </MenuItem>
));

const DataPicker = ({ operation, selectedDate, handleDateChange, classes }) => {
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

const CreateHabitInfo = () => {
  const classes = useStyles();
  const [category, setCategory] = useState(habitCategories[0].name);
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeCategory = (e) => setCategory(e.target.value);
  const handleBeginDateChange = (date) => setBeginDate(date);
  const handleEndDateChange = (date) => setEndDate(date);

  return (
    <CreateHabitInfoContainer>
      <Header>Information about create new habit</Header>
      <TextField
        id="NameOfHabit"
        label="Name of habit"
        variant="outlined"
        className={classes.formElement}
      />
      <FormControl
        variant="outlined"
        labelId="habitCategories"
        id="habitCategories"
        className={classes.formElement}
      >
        <InputLabel id="habitCategories">Categories</InputLabel>
        <Select
          value={category}
          onChange={handleChangeCategory}
          label="Categories"
        >
          {categories}
        </Select>
      </FormControl>
      <DataPicker
        operation="begin"
        selectedDate={beginDate}
        handleDateChange={handleBeginDateChange}
        classes={classes.formElement}
      />
      <DataPicker
        operation="end"
        selectedDate={endDate}
        handleDateChange={handleEndDateChange}
        classes={classes.formElement}
      />
    </CreateHabitInfoContainer>
  );
};

export default CreateHabitInfo;
