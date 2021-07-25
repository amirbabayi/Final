import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LineChart from "./../chart4";
import ChartBar2 from "./../chart3";
import LineDemo from "./../chart";
import ChartBar from "./../chart2";
import NativeSelects from "./selectComp/select";
import Filter from "./selectComp/select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(43.6),
      height: theme.spacing(25),
    },
  },
  blue: {
    border: "2px solid #bddbff",
    backgroundColor: "#d1e6ff",
    padding: 20,
  },
  yellow: {
    border: "2px solid #ffe9bd",
    backgroundColor: "#fff6d1",
    padding: 20,
  },
  tomato: {
    border: "2px solid #ffcabd",
    backgroundColor: "#ffdcd1",
    padding: 20,
  },
  purple: {
    border: "2px solid #debdff",
    backgroundColor: "#edd1ff",
    padding: 20,
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Paper elevation={0} className={classes.blue}>
        <Grid
          item
          container
          style={{ fontSize: 16, paddingBottom: 40, color: "#071537" }}
        >
          Revinue Status
        </Grid>
        <Grid
          item
          container
          alignItems={"flex-end"}
          justify={"space-between"}
          // style={{ paddingTop: 20 }}
        >
          <Grid item lg={8} alignItems={"center"} style={{paddingRight:"100px"}}>
            <ChartBar  />
          </Grid>
          <Grid
            item
            lg={4}
            alignItems={"center"}
            justify={"flex-end"}
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#11a7ed",
            }}
          >
            {/* <ArrowUpwardSharpIcon style={{ fontSize: 40 }} /> */}
            <p>$432</p>
            <p style={{ fontSize: 12, color: "#595959" }}>Jan 01-Jan 10</p>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.yellow}>
        <Grid container>
          <Grid container>
            <Grid item container style={{ fontSize: 16, color: "#071537" }}>
              Page View
            </Grid>
            <Grid
              item
              lg={6}
              alignItems={"center"}
              justify={"flex-end"}
              style={{
                fontSize: 36,
                color: "#ffc604",
                fontWeight: "bold",
              }}
            >
              {/* <ArrowUpwardSharpIcon style={{ fontSize: 40 }} /> */}
              $432
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <LineDemo />
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.tomato}>
        <Grid container>
          <Grid container>
            <Grid item container style={{ fontSize: 16, color: "#071537" }}>
              Bounce Rate
            </Grid>
            <Grid
              item
              lg={6}
              alignItems={"center"}
              justify={"flex-end"}
              style={{
                fontSize: 36,
                color: "tomato",
                fontWeight: "bold",
              }}
            >
              {/* <ArrowUpwardSharpIcon style={{ fontSize: 40 }} /> */}
              $432
            </Grid>
          </Grid>
          <Grid item container style={{marginTop:22}}>
            <Grid item alignItems="center" justify="flex-start" lg={6}>
              <Filter />
            </Grid>
            <Grid item alignItems="flex-end" justify="flex-start" lg={6}>
              <LineChart />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.purple}>
        <Grid
          item
          container
          style={{ fontSize: 16, paddingBottom: 40, color: "#071537" }}
        >
          Revinue Status
        </Grid>
        <Grid
          item
          container
          alignItems={"flex-end"}
          justify={"space-between"}
          // style={{ paddingTop: 20 }}
        >
          <Grid item lg={8} alignItems={"center"} style={{paddingRight:"100px"}}>
            <ChartBar2 />
          </Grid>
          <Grid
            item
            lg={4}
            alignItems={"center"}
            justify={"flex-end"}
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#9213fd",
            }}
          >
            <p>$432</p>
            <p style={{ fontSize: 12, color: "#595959" }}>Jan 01-Jan 10</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
