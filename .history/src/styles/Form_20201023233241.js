import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    height: "600px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
