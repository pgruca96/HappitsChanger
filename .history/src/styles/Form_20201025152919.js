import { makeStyles } from "@material-ui/core/styles";

export const ColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const useStyles = makeStyles((theme) => ({
  form: {
    background: "#f2f2f2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit";
    // padding: theme.spacing(3, 6),
  },
  // margin: {
  //   margin: theme.spacing(3, 6),
  // },
}));
