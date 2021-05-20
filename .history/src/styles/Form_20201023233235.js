import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    height: "200px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
