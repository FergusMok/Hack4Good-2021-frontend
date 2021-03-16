import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "@material-ui/icons/HomeWorkTwoTone";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "white",
  },
  clickableIcon: {
    color: "white",
    "&:hover": {
      color: "yellow",
    },
    marginRight: theme.spacing(1),
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger();
  const history = useHistory();
  const pushHome = () => history.push("/");

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="sticky" elevation={0} style={{ backgroundColor: "#344955" }}>
          <Toolbar>
            <IconButton onClick={(e) => pushHome()}>
              <Home className={classes.icon} />
            </IconButton>
            <Typography variant="h6" padding={10} className={classes.title} className={classes.icon}>
              Our Application Name
            </Typography>
            {/*           <Button color="inherit">Login</Button>
             */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
