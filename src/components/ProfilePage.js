import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar";
import { getInterestsFromGithub } from "./../APICalls";
import Profile from "./ProfileComponents/Profile.js";
import Loading from "./ProfileComponents/Loading.js";
import Box from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const ProfilePage = (props) => {
  const [interests, setInterests] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function interestsCallback(interests) {
    if (interests.issue == "InValid UserName") {
      console.log("THIS IS INTERESTS!");
      console.log(interests);
      setError(true);
      setLoading(false);
    } else {
      setInterests(interests);
      setLoading(false);
    }
  }

  useEffect(() => {
    getInterestsFromGithub(interestsCallback, props.match.params.username);
  }, []);

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
    profile: {
      marginTop: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <NavBar />
      <SearchBar />
      <Profile className={classes.profile} interests={interests} isLoading={isLoading} error={error} />
    </>
  );
};

export default ProfilePage;
