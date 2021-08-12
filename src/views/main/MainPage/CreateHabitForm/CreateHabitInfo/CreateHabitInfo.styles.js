import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`;
export const CreateHabitInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const useStyles = makeStyles((theme) => ({
  formElement: {
    margin: theme.spacing(2, 2),
    minWidth: '100%',
  },
  selectEmpty: {
    minWidth: 200,
  },
}));
