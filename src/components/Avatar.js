import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CssBaseline } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Avatar = () => {
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
      <CssBaseline />
      <Card className={classes.card} justify="center" height={300}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image="https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MDA5OTYwNjg4MjY1MTYz/main-idris-elba-hobbs-and-shaw-premiere-los-angeles-gray-suit.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bobby Kim
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              National University of Technology <br /> Masters in Engineering
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Avatar;
