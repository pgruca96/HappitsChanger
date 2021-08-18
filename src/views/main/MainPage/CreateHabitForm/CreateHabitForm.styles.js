import { makeStyles } from '@material-ui/core/styles';

export const useCustomHabitStyles = makeStyles((theme) => ({
    createHabitInfoContainer: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0, 2),
      "& > *": {
        margin: theme.spacing(2),
        minWidth: '100%',
      }
    },
    formElement: {
      minWidth: '100%',
    }
  }));