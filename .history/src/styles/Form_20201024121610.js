import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    background: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "0 5%",
    // height: "inherit",
  },
  margin: {
    margin: theme.spacing(3, 6),
  },
}));
