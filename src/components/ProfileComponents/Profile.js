import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BarChart from "./BarChart";
import Doughnut from "./Doughnut";
import Avatar from "./Avatar.js";
import Loading from "./Loading";
import { getInterestsFromGithub } from "./../../APICalls";
import Box from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Profile = ({ interests, isLoading, error }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      height: "200px",
      color: theme.palette.text.secondary,
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
    FormRowPaper: {
      padding: theme.spacing(1),
      textAlign: "left",
      color: theme.palette.text.secondary,
      height: "125px",
      width: "350px",
    },
    cardTypography: {
      align: "left",
      variant: "h6",
      padding: "5px",
      color: "textSecondary",
    },
    errorCard: {
      width: "auto",
      height: "100px",
      textAlign: "center",
      justify: "center",
      alignItems: "center",
      color: theme.palette.text.secondary,
    },
    containerStyle: {
      marginTop: "40px",
      position: "relative",
      overflow: "visible",
    },
  }));

  const classes = useStyles();

  const FormRows = () => {
    return (
      <React.Fragment>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}>
              TOTAL NUMBER OF FORKEDREPOS :
              <Typography color="textPrimary" variant="h3" align="center">
                {interests.ForkedRepoCount}
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}>
              TOTAL NUMBER OF REPO :
              <Typography color="textPrimary" variant="h3" align="center">
                {interests.TotalRepoCount}
              </Typography>
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  };

  console.log("Error and Loading");
  console.log(error);
  console.log(isLoading);

  return error ? (
    <Container maxWidth={"xl"} className={classes.containerStyle}>
      <Paper className={classes.errorCard}>
        <Typography color="textPrimary" variant="h3">
          Hello, this user does not exist. Please try again{" "}
        </Typography>
      </Paper>
    </Container>
  ) : isLoading ? (
    <Grid container justify="center" className={classes.containerStyle}>
      <Loading />
    </Grid>
  ) : (
    <Container maxWidth={"xl"} className={classes.containerStyle}>
      <Grid container spacing={3} justify="flex-start" xs={12}>
        <Grid container item lg={9} spacing={3} justify="flex-start" alignItems="flex-start">
          <Grid item lg={9}>
            <BarChart interests={interests.concepts} />
          </Grid>
          <Grid item lg={3}>
            <Doughnut interests={interests.extensions} />
          </Grid>
        </Grid>

        <Grid container item lg={3} spacing={3} direction="column" justify="flex-start" alignItems="flex-start">
          {FormRows()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
