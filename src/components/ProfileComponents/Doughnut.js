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
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";
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

  /*   const devices = [
    {
      title: "Desktop",
      value: 63,
      icon: Filter1,
      color: colors.indigo[500],
    },
    {
      title: "Tablet",
      value: 15,
      icon: Filter2,
      color: colors.red[600],
    },
    {
      title: "Mobile",
      value: 23,
      icon: Filter3,
      color: colors.orange[600],
    },
    {
      title: "Others",
      value: 23,
      icon: Filter3,
      color: colors.orange[600],
    },
  ];
 */
  const deviceColors = [colors.indigo[500], colors.red[600], colors.orange[600], colors.orange[600]];
  const icons = [Filter1, Filter2, Filter3, Help];
  const devices = [];
  const values = [];
  var allEntries = Object.entries(JSON.parse(JSON.stringify(interests)));
  // It'll be an array, [key,value]

  allEntries.sort(sortFunction);

  // Sort by descending
  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    }
    return a[1] < b[1] ? 1 : -1;
  }

  // Convert the JSON to an array, and then sort the array according to value
  // The last value should contain the rest, be labelled as "Others"

  let sum = 0;
  for (var i = 0; i < 3; i++) {
    devices.push({
      title: allEntries[i][0],
      value: allEntries[i][1],
      icon: icons[i],
      color: deviceColors[i],
    });
    sum = sum + allEntries[i][1];
  }

  var totalSum = allEntries
    .forEach((a) => {
      return a[1];
    })
    .sum();

  if (allEntries.length > 3) {
    devices.push({
      title: "Others",
      value: totalSum - sum,
      color: deviceColors[3],
    });
  }

  data.datasets[0].data = values;

  return (
    <Card>
      <CardHeader title="File Extensions" />
      <Divider />
      <CardContent>
        <Box height={300} position="relative">
          <Doughnut data={data} options={options} />
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box key={title} p={1} textAlign="center">
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {/* Icon and Title Sizing */}
                {title}
              </Typography>
              <Typography style={{ color }} variant="h3">
                {/* Numbers Sizing and Color */}
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoughnutComponent;
