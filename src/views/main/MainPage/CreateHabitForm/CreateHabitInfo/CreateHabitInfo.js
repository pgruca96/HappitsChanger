import React, { useState } from 'react';
import { TextField, InputLabel, Select, FormControl } from '@material-ui/core';
import { useFormElementStyles } from '../../../../../components/forms/pickers/Pickers.styles';
import { Header } from '../../../../../utils/helpers/styles/h2';
import { habitCategories } from '../../../../../utils/constants/habitData';
import { selectItems } from '../../../../../utils/helpers/showSelectItems';
import DatePicker from "../../../../../components/forms/pickers/DatePicker";

const CreateHabitInfo = () => {
  const [category, setCategory] = useState(habitCategories[0].name);
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const classes = useFormElementStyles();

  const handleChangeCategory = (e) => setCategory(e.target.value);
  const handleBeginDateChange = (date) => setBeginDate(date);
  const handleEndDateChange = (date) => setEndDate(date);

  return (
    <>
      <Header>Information about create new habit</Header>
      <TextField id="NameOfHabit" label="Name of habit" variant="outlined" />
      <FormControl
        variant="outlined"
        labelId="habitCategories"
        id="habitCategories"
      >
        <InputLabel id="habitCategories">Categories</InputLabel>
        <Select
          value={category}
          onChange={handleChangeCategory}
          label="Categories"
        >
          {selectItems(habitCategories)}
        </Select>
      </FormControl>
      <DatePicker
        operation="begin"
        selectedDate={beginDate}
        handleDateChange={handleBeginDateChange}
        classes={classes.formElement}
      />
      <DatePicker
        operation="end"
        selectedDate={endDate}
        handleDateChange={handleEndDateChange}
        classes={classes.formElement}
      />
    </>
  );
};

export default CreateHabitInfo;
