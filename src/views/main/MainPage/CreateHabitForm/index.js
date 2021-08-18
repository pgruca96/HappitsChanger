import React, { useState } from 'react';
import CreateHabitInfo from './CreateHabitInfo/CreateHabitInfo';
import CreateHabitFrequence from './CreateHabitFrequence/CreateHabitFrequence';
import { HabitForm } from '../../../../utils/helpers/styles/Form';
import { useCustomHabitStyles } from './CreateHabitForm.styles';
import { habitStepperSteps } from '../../../../utils/constants/habitStepperSteps';
import CustomizedStepper from '../../../../components/forms/stepper/Stepper';

const CreateHabitForm = () => {
  const classes = useCustomHabitStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  const handleSubmit = () => console.log('submit habit');

  return (
    <HabitForm>
      <div className={classes.createHabitInfoContainer}>
        {activeStep === 0 && <CreateHabitInfo />}
        {activeStep === 1 && <CreateHabitFrequence />}
      </div>
      <CustomizedStepper
        steps={habitStepperSteps}
        activeStep={activeStep}
        next={handleNext}
        back={handleBack}
        reset={handleReset}
        submit={handleSubmit}
      />
    </HabitForm>
  );
};

export default CreateHabitForm;
