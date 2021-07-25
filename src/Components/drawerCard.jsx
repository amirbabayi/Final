import React from "react";
import ReactDOM from "react-dom"
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import CreateIcon from "@material-ui/icons/Create";
import MoodIcon from "@material-ui/icons/Mood";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ListIcon from "@material-ui/icons/List";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import pic from "./img/PicsArt_04-29-11.21.06.jpg";

import NotificationsIcon from "@material-ui/icons/Notifications";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 2,
  },
  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: "white" }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid container justify={"flex-end"} direction={"row"} spacing={2}>
              <Grid justify={"flex-end"} item>
                <Badge badgeContent={3} color="primary">
                  <NotificationsIcon
                    style={{ color: "#919191", fontSize: 23 }}
                  />
                </Badge>
              </Grid>
              <Grid justify={"flex-end"} item>
                <Badge badgeContent={4} color="secondary">
                  <HomeIcon style={{ color: "#919191", fontSize: 23 }} />
                </Badge>
              </Grid>
              <Grid justify={"flex-end"} item>
                <Avatar
                  src={pic}
                  style={{
                    display: "inline-block",
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Grid>
              <Grid justify={"flex-end"} item>
                <PostAddIcon style={{ color: "#919191", fontSize: 23 }} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div
          style={{ backgroundColor: "#05003b", color: "white" }}
          className={classes.drawerHeader}
        >
          <IconButton onClick={handleDrawerClose}>
            <Grid style={{ color: "white", weghit: "bold" }}>
              <p>Lector.</p>
            </Grid>
          </IconButton>
        </div>
        <Divider light />
        <List style={{ backgroundColor: "#05003b" }}>
          {[
            {
              title: "Dashboard",
              icon: <HomeIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "UI Elements",
              icon: <FitnessCenterIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "Advanced UI",
              icon: <EqualizerIcon style={{ fontSize: 15 }} />,
            },
            { title: "Editors", icon: <CreateIcon style={{ fontSize: 15 }} /> },

            { title: "Icons", icon: <MoodIcon style={{ fontSize: 15 }} /> },
            {
              title: "Maps",
              icon: <LocationOnIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "User Pages",
              icon: <PersonIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "Error Pages",
              icon: <MoodBadIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "General Pages",
              icon: <DescriptionIcon style={{ fontSize: 15 }} />,
            },
            { title: "E-mail", icon: <EmailIcon style={{ fontSize: 15 }} /> },
            {
              title: "Calendar",
              icon: <CalendarTodayIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "Todo List",
              icon: <ListIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "Gallery",
              icon: <PhotoCameraIcon style={{ fontSize: 15 }} />,
            },
            {
              title: "Documentation",
              icon: <PostAddIcon style={{ fontSize: 15 }} />,
            },
          ].map((item) => (
            <ListItem button style={{marginBottom:10}} key={item.title}>
              <ListItemIcon style={{ color: "#d1d1d1" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography style={{ color: "#d1d1d1", fontSize: "12px" }}>
                    {item.title}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
