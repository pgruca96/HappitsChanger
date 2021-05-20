import { makeStyles } from "@material-ui/core/styles";

export const ColumnCenter = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

export const useStyles = makeStyles((theme) => ({
  form: {
    background: "#f2f2f2",
    ColumnCenter,
  },
  margin: {
    margin: theme.spacing(3, 6),
  },
}));
