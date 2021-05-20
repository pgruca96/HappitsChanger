import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    minHeight: "30vh",
  },
  margin: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
  },
}));
