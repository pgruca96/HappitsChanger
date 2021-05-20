import { makeStyles } from "@material-ui/core/styles";
import { ColumnCenter } from "../styles/columnCenter";

export const useStyles = makeStyles((theme) => ({
  form: {
    background: "#f2f2f2",
    ColumnCenter,
  },
  margin: {
    margin: theme.spacing(3, 6),
  },
}));
