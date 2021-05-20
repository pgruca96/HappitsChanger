import { makeStyles } from "@material-ui/core/styles";

export const ColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const useStyles = makeStyles((theme) => ({
  form: {
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    // padding: theme.spacing(3, 6),
  },
  // margin: {
  //   margin: theme.spacing(3, 6),
  // },
}));
