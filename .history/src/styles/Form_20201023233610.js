import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    minHeight: "50vh",
  },
  margin: {
    margin: theme.spacing(6),
  },
}));
