import { makeStyles } from "@material-ui/core/styles";

export const ColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20% auto",
    // padding: theme.spacing(3, 6),
  },
}));
