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
      height: "auto",
      textAlign: "centre",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  const FormRows = () => {
    return (
      <React.Fragment>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}>
              TOTAL NUMBER OF FORKEDREPOS : {interests.ForkedRepoCount}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}>
              TOTAL NUMBER OF TOTALREPOCOUNT : {interests.TotalRepoCount}
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}> TOTAL NUMBER OF : </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  };

  console.log("Error and Loading");
  console.log(error);
  console.log(isLoading);

  return error ? (
    <Paper className={classes.errorCard}>
      <Typography className={classes.cardTypography}> Hello you have a big fat error </Typography>
    </Paper>
  ) : isLoading ? (
    <Grid container justify="center">
      <Loading />
    </Grid>
  ) : (
    <>
      <Box mt={6}>
        <Container maxWidth={"xl"} className={classes.root} marginTop={"50px"}>
          <Grid container spacing={3} justify="space-evenly" xs={12}>
            <Grid item lg={2.5}>
              <Avatar />
            </Grid>

            <Grid container item lg={9} spacing={3} justify="space-evenly">
              {FormRows()}
            </Grid>

            <Grid container item lg={12} spacing={3} justify="space-evenly" alignItems="flex-start">
              <Grid item lg={9}>
                <BarChart interests={interests.concepts} />
              </Grid>
              <Grid item lg={3}>
                {/*                 <Doughnut interests={interests.extensions} />
                 */}{" "}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
