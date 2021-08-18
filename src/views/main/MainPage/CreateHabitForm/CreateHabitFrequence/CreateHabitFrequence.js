import React, { useState } from 'react';
import { Header } from '../../../../../utils/helpers/styles/h2';
import { InputLabel, Select, FormControl } from '@material-ui/core';
import {
  habitDefaultFrequences,
  habitTimeOfClasses,
} from '../../../../../utils/constants/habitData';
import { useFormElementStyles } from '../../../../../components/forms/pickers/Pickers.styles';
import { selectItems } from '../../../../../utils/helpers/showSelectItems';
import TimePicker from '../../../../../components/forms/pickers/TimePicker';

const CreateHabitFrequence = () => {
  const classes = useFormElementStyles();
  const [frequence, setFrequence] = useState(habitDefaultFrequences[0].name);
  const [classesPerDay, setClassesPerDay] = useState(1);
  const [timeOfClasses, setTimeOfClasses] = useState(habitTimeOfClasses[0]);
  const [hourOfClasses, setHourOfClasses] = useState({
    firstClasses: new Date(),
    secondClasses: new Date(),
    thirdClasses: new Date(),
  });

  const handleFirstTimeChange = (date) => {
    setHourOfClasses({ ...hourOfClasses, firstClasses: date });
  };
  const handleSecondTimeChange = (date) => {
    setHourOfClasses({ ...hourOfClasses, secondClasses: date });
  };
  const handleThirdTimeChange = (date) => {
    setHourOfClasses({ ...hourOfClasses, thirdClasses: date });
  };

  return (
    <>
      <Header>Frequence settings</Header>
      <FormControl
        variant="outlined"
        labelId="habitFrequences"
        id="habitFrequences"
      >
        <InputLabel id="habitFrequences">Frequences</InputLabel>
        <Select
          value={frequence}
          onChange={(e) => setFrequence(e.target.value)}
          label="Frequences"
        >
          {selectItems(habitDefaultFrequences)}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        labelId="habitClassesPerDay"
        id="habitClassesPerDay"
      >
        <InputLabel id="habitClassesPerDay">
          Number of classes in a given day
        </InputLabel>
        <Select
          value={classesPerDay}
          onChange={(e) => setClassesPerDay(e.target.value)}
          label="ClassesPerDay"
        >
          {selectItems([1, 2, 3])}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        labelId="habitTimeOfClasses"
        id="habitTimeOfClasses"
      >
        <InputLabel id="habitTimeOfClasses">Time of classes</InputLabel>
        <Select
          value={timeOfClasses}
          onChange={(e) => setTimeOfClasses(e.target.value)}
          label="TimeOfClasses"
        >
          {selectItems(habitTimeOfClasses)}
        </Select>
      </FormControl>
      <TimePicker
        numberOfClasses="first"
        selectedTime={hourOfClasses.firstClasses}
        handleTimeChange={handleFirstTimeChange}
        classes={classes.formElement}
      />
      <TimePicker
        numberOfClasses="second"
        selectedTime={hourOfClasses.secondClasses}
        handleTimeChange={handleSecondTimeChange}
        classes={classes.formElement}
        disabled={classesPerDay < 2}
      />
      <TimePicker
        numberOfClasses="third"
        selectedTime={hourOfClasses.thirdClasses}
        handleTimeChange={handleThirdTimeChange}
        classes={classes.formElement}
        disabled={classesPerDay < 3}
      />
    </>
  );
};

export default CreateHabitFrequence;
