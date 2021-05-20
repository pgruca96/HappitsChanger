import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    minHeight: "150px",
  },
  margin: {
    margin: theme.spacing(4, 6),
  },
}));
