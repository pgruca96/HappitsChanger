import React, { useState } from 'react';
import CreateHabitInfo from './CreateHabitInfo/CreateHabitInfo';
import { HabitForm } from '../../../../utils/helpers/styles/Form';
import { habitStepperSteps } from '../../../../utils/constants/habitStepperSteps';
import CustomizedStepper from '../../../../components/forms/stepper/Stepper';

const CreateHabitForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () =>
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleReset = () => setActiveStep(0);

  return (
    <HabitForm>
      {activeStep === 0 && <CreateHabitInfo />}
      <CustomizedStepper
        steps={habitStepperSteps}
        activeStep={activeStep}
        next={handleNext}
        back={handleBack}
        reset={handleReset}
      />
    </HabitForm>
  );
};

export default CreateHabitForm;
