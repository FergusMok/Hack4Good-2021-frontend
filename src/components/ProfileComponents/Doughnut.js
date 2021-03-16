import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Filter1, Filter2, Filter3, Help } from "@material-ui/icons";

const DoughnutComponent = ({ interests }) => {
  const theme = useTheme();
  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: [colors.indigo[500], colors.red[600], colors.orange[600]],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: ["Desktop", "Tablet", "Mobile"],
  };
  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  var concepts = [];
  var values = [];
  // Concept, value
  for (var key in interests) {
    if (interests.hasOwnProperty(key)) {
      const val = interests[key];
      concepts.push(key);
      values.push(val);
    }
  }
  // Cycle between the colors
  const listOfColors = [
    colors.red[500],
    colors.orange[500],
    colors.indigo[500],
    colors.pink[500],
    colors.deepPurple[500],
    colors.teal[500],
    colors.blue[500],
    colors.blueGrey[500],
    colors.cyan[500],
    colors.brown[500],
    colors.lightGreen[500],
    colors.green[500],
  ];

  data.labels = concepts;
  data.datasets[0].data = values;
  const numberOfColors = values.length;
  const colorList = [];
  for (var i = 0; i < numberOfColors; i++) {
    var color = listOfColors[i % listOfColors.length];
    colorList.push(color);
  }

  data.datasets[0].backgroundColor = colorList;

  return (
    <Card>
      <CardHeader title="File Extensions" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoughnutComponent;
