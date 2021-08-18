import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
  form: {
    width: '40%',
    minWidth: '300px',
    minHeight: '300px',
    maxHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    margin: '5vh auto',
  },
}));

export const HabitForm = styled.form`
  width: 60%;
  min-width: 250px;
`;
