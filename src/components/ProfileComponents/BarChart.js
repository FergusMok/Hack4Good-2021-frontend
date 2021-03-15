import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Card from "@material-ui/core/Card";
import { CssBaseline } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Interest Scoring",
      data: [12, 19, 3, 5, 4, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",

        /*         "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)", // a see-through option
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
 */
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const HorizontalBarChart = () => {
  return (
    <Card>
      <CardHeader title="Interest Graph" />
      <Divider />
      <HorizontalBar data={data} options={options} />
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default HorizontalBarChart;
