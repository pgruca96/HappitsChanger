import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    background: white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    // height: "200px",
  },
  margin: {
    margin: theme.spacing(3, 6),
  },
}));
