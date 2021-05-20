import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
