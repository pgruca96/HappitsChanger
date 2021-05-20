import { makeStyles } from "@material-ui/core/styles";

export const ColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const useStyles = makeStyles(() => ({
  form: {
    width: "40%",
    minWidth: "300px",
    // height: "60%",
    minHeight: "300px",
    maxHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
    margin: "10vh auto",
  },
}));
