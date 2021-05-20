import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';

const Form = styled.form`
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    minHeight: "30vh",
    &:only-child: {
        margin: 10vh 15vw, 
    }
`
export const useStyles = makeStyles((theme) => ({
  form: {
  },
  margin: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    marginTop: theme.
  },
}));
