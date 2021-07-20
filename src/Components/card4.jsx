import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import { green,  blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ListIcon from "@material-ui/icons/List";
import CreateIcon from "@material-ui/icons/Create";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: theme.palette.background.paper,
    padding:30,
    // padding: 30,
    // margin: 20,
  },

  pink: {
    color: "white",
    backgroundColor: "#ed669a",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  green: {
    color: "white",
    backgroundColor: green[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  purple: {
    color: "white",
    backgroundColor: "#496eb8",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  yellow: {
    color: "white",
    backgroundColor: "gold",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  blue: {
    color: "white",
    backgroundColor: blue[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  // fs: {
  //   color: "#adadad",
  // },
}));
 
export default function FolderList() {
  const classes = useStyles();
  const data = [
    {
      date: "42 Min Ago",
      icon: <ListIcon style={{ fontSize: 18 }} />,
      title: "Task Update",
      note: <p><b style={{ color:"black" }}>Nikolai</b> Update a Taske</p>,
      color: [classes.purple],
    },
    {
      date: "1 day Ago",
      icon: <FitnessCenterIcon style={{ fontSize: 15 }} />,
      title: "Deal Added",
      note: <p><b style={{ color:"black" }}>Panshi</b> Update a Taske</p>,
      color: [classes.pink],
    },
    {
      date: "42 Min Ago",
      icon: <CreateIcon style={{ fontSize: 15 }} />,
      title: "Published Article",
      note: <p><b style={{ color:"black" }}>Rasel</b> Published a Article</p>,
      color: [classes.blue],
    },
    {
      date: "1 day Ago",
      icon: <FitnessCenterIcon style={{ fontSize: 15 }} />,
      title: "Dock Update",
      note: <p><b style={{ color:"black" }}>Reshmi</b> Update a Dock</p>,
      color: [classes.yellow],
    },
    {
      date: "1 day Ago",
      icon: <FitnessCenterIcon style={{ fontSize: 15 }} />,
      title: "Replyed Comment",
      note: <p><b style={{ color:"black" }}>Jenathon</b> Added a Comment</p>,
      color: [classes.green],
    },
  ];
  return (
    <List className={classes.root}>
      <h5 style={{ color: "black"}}>Recente Activitis</h5>
      {data.map((item) => (
        <Grid container justify='space-evenly' style={{marginBottom:40,}}>
          <Grid item container alignItems="center" justify='flex-start' lg={4} style={{color:"#a3a3a3",fontSize:12}}>
            {item.date}
          </Grid>
          <Grid item container alignItems="center" justify='flex-start' lg={2} style={{}}>
            <Avatar className={item.color}>{item.icon}</Avatar>
          </Grid>
          <Grid item container alignItems="center" justify='flex-start' lg={6} style={{fontWeight:600,fontSize:16}}>
            {item.title}
            <div style={{textAlign:"center",fontWeight:400,fontSize:12,paddingTop:10,color:"#a3a3a3"}}>
              {item.note}
            </div>
          </Grid>
        </Grid>
      ))}
    </List>
  );
}






