import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { habitStepperSteps } from '../../../utils/constants/habitStepperSteps';
import { useStyles, ColorlibConnector, useColorlibStepIconStyles } from "./Stepper.styles";

const ColorlibStepIcon = ({ active, completed, icon }) => {
  const classes = useColorlibStepIconStyles();
  const icons = {};
  habitStepperSteps.forEach(({icon}, index) => icons[`${index+1}`] = icon);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};
const CustomizedStepper = ({
  steps,
  activeStep,
  next,
  back,
  reset,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map(({label}) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.actionsButtons}>
        <Button variant="contained" onClick={reset}>
          Reset habit
        </Button>
        <Button variant="contained" onClick={next} color="primary">
          Next step
        </Button>
      </div>
    </div>
  );
}

export default CustomizedStepper;
