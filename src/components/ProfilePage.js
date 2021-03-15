import Doughnut from "./ProfileComponents/Doughnut";
import React from "react";
import HorizontalBarChart from "./ProfileComponents/BarChart";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import Avatar from "./Avatar.js";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar";
const ProfilePage = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: "200px",
      color: theme.palette.text.secondary,
    },
    large: {
      width: theme.spacing(40),
      height: theme.spacing(40),
    },
    card: {
      display: "block",
      width: "350px",
      height: "auto",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <SearchBar />
      <CssBaseline />
      <Grid container direction="row" justify="center" alignitems="stretch">
        <Grid item xs={3} className={classes.paper}>
          <Avatar />
        </Grid>
        <Grid item xs={5} className={classes.paper}>
          <HorizontalBarChart />
        </Grid>
        <Grid item xs={3} className={classes.paper}>
          <Doughnut />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
