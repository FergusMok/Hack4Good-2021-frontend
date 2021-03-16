import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <Box width="25%" alignItems={"centre"}>
      … <CircularProgress size={"20"} color="secondary" />
    </Box>
  );
}
