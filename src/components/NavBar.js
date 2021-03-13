import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
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

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="static" elevation={0} style={{ backgroundColor: "#344955" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
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
