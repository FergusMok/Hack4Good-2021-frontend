import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

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

const HorizontalBarChart = (props) => {
  const lst1 = [];
  const lst2 = [];

  console.log(props.interests);
  for (var key in props.interests) {
    // check if the property/key is defined in the object itself, not in parent
    if (props.interests.hasOwnProperty(key)) {
      const val = props.interests[key];
      lst1.push(key);
      lst2.push(val);
    }
  }
  data.labels = lst1;
  const data_set = data.datasets[0];
  data_set.data = lst2;
  data.datasets = [data_set];

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
