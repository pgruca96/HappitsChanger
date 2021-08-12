import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

const backgroundStepImage = 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)';

export const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2, 2),
      width: '100%',
    },
    actionsButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(2, 0),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

export const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    activeOrCompleted: {
      '& $line': {
        backgroundImage: backgroundStepImage
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);
  
  export const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage: backgroundStepImage,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage: backgroundStepImage,
    },
  });