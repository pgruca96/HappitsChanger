import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    minHeight: "30vh",
  },
  margin: {
    margin: `0 ${theme.spacing(6)}`,
  },
}));
