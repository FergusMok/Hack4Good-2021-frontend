import Doughnut from "./ProfileComponents/Doughnut";
import React from "react";
import HorizontalBarChart from "./ProfileComponents/BarChart";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import Avatar from "./Avatar.js";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
  }));

  const FormRows = () => {
    return (
      <React.Fragment>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}> TOTAL NUMBER OF : </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper className={classes.FormRowPaper}>
            <Typography className={classes.cardTypography}> TOTAL NUMBER OF : </Typography>
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

  const classes = useStyles();
  return (
    <>
      <NavBar />
      <SearchBar />
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
                <HorizontalBarChart />
              </Grid>
              <Grid item lg={3}>
                <Doughnut />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProfilePage;
