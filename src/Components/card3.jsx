import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Button from "@material-ui/core/Button";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // display: "flex",
    // backgroundColor:"gold",
    width: "100%",
    padding: 20,
  },
  tab: {
    width: "10",
  },
  color: {
    backgroundColor: "#ff5e15",
    color: "white",
    padding: "7px 15px",
    textTransform: "capitalize",
    padding: 16,
    marginTop: 25,
    marginBottom: 32,
    "&:hover":{
      backgroundColor: "#ff5407 ",
    }
  },
  size: {
    fontSize: 12,
    minWidth: 80,
  },
  red: {
    color: "white",
    backgroundColor: "#f33926",
  },
  pink: {
    color: "white",
    backgroundColor: "#fd7397",
  },
  purple: {
    color: "white",
    backgroundColor: "#657adc",
  },
  green: {
    color: "white",
    backgroundColor: "#4ba23c",
  },
  indicator: {
    color: "#f16321",
  },
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const data = [
    {
      note: "Online",
      icon: (
        <FiberManualRecordIcon style={{ fontSize: 13, color: "#21a2fd" }} />
      ),
    },
    {
      note: "Store",
      icon: (
        <FiberManualRecordIcon style={{ fontSize: 13, color: "#ff5e15" }} />
      ),
    },
  ];
  const node = [
    {
      num: "$3468.96",
      note: "Current Month Earnin",
    },
    {
      num: "82",
      note: "Current Month Sales",
    },
  ];

  const test = [
    {
      icon: <CakeIcon />,
      title: "Wallet Balance",
      note: "$4,567.53",
      color: [classes.red],
    },
    {
      icon: <FavoriteIcon />,
      title: "Referral Earning",
      note: "$1689.53",
      color: [classes.purple],
    },
    {
      icon: <LoyaltyIcon />,
      title: "Estimate Sales",
      note: "$2851.53",
      color: [classes.green],
    },
    {
      icon: <CakeIcon />,
      title: "Earning",
      note: "$52,567.53",
      color: [classes.pink],
    },
  ];

  const tab = [
    {
      label: "DAILY",
      style: [classes.size],
    },
    {
      label: "WEEKLY",
      style: [classes.size],
    },
    {
      label: "MONTHLY",
      style: [classes.size],
    },
    {
      label: "YEARLY",
      style: [classes.size],
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item container lg={2} alignItems="center">
          <p style={{ fontSize: 14, fontWeight: 600, color: "#071537" }}>
            Dashboard
          </p>
          <p style={{ fontSize: 11, color: "#a3a3a3" }}>
            OverView Of Latest Month
          </p>
        </Grid>
        <Grid item container lg={8} justify={"center"}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            {tab.map((item) => (
              <Tab label={item.label} className={item.style} />
            ))}
          </Tabs>
        </Grid>
        <Grid item container lg={2} alignItems="center">
          {data.map((item) => (
            <Grid
              item
              justify={"center"}
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: "#a3a3a3",
                paddingRight: 10,
              }}
            >
              {item.icon} {item.note}
            </Grid>
          ))}
        </Grid>
        <Grid item container>
          <Grid item lg={3}>
            {node.map((item) => (
              <Grid
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  paddingTop: 25,
                  color: "#071537",
                }}
              >
                {item.num}
                <Grid item style={{ fontSize: 11, color: "#a3a3a3" }}>
                  {item.note}
                </Grid>
              </Grid>
            ))}
            <Grid>
              <Button
                variant="contained"
                className={classes.color}
                size="small"
              >
                <p style={{ fontSize: 14 }}>Last Month Summary</p>
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify={"center"}
            lg={9}
            alignItems="center"
            style={{ fontSize: 40 }}
          >
            chart
          </Grid>
        </Grid>

        {test.map((item) => (
          <Grid
            item
            container
            justify="space-evenly"
            lg={3}
            style={{ paddingTop: 20 }}
          >
            <Grid item alignItems="center" justify="flex-start">
              <Avatar className={item.color}>{item.icon}</Avatar>
            </Grid>
            <Grid
              item
              alignItems="center"
              justify="flex-start"
              style={{ fontSize: 11, color: "#a3a3a3" }}
            >
              {item.title}
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#071537",
                }}
              >
                {item.note}
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
