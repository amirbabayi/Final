import React from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
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
import PostAddIcon from "@material-ui/icons/PostAdd";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import pic from "../../img/PicsArt_04-29-11.21.06.jpg";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {dataDrawer} from "../../data/drawerData";

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
    avatarStyle: {
        display: "inline-block", width: "23px", height: "23px",
    }
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
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{backgroundColor: "white"}}>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Grid container>
                        <Grid container justify={"flex-end"} direction={"row"} spacing={2}>
                            <Grid justify={"flex-end"} item>
                                <Badge badgeContent={3} color="primary">
                                    <NotificationsIcon
                                        style={{color: "#919191", fontSize: 23}}
                                    />
                                </Badge>
                            </Grid>
                            <Grid justify={"flex-end"} item>
                                <Badge badgeContent={4} color="secondary">
                                    <HomeIcon style={{color: "#919191", fontSize: 23}}/>
                                </Badge>
                            </Grid>
                            <Grid justify={"flex-end"} item>
                                <Avatar
                                    src={pic}
                                    className={classes.avatarStyle}
                                />
                            </Grid>
                            <Grid justify={"flex-end"} item>
                                <PostAddIcon style={{color: "#919191", fontSize: 23}}/>
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
                classes={{paper: classes.drawerPaper,}}
            >
                <div
                    style={{backgroundColor: "#05003b", color: "white"}}
                    className={classes.drawerHeader}
                >
                    <IconButton onClick={handleDrawerClose}>
                        <Grid style={{color: "white", weghit: "bold"}}>
                            <p>Lector.</p>
                        </Grid>
                    </IconButton>
                </div>
                <Divider light/>
                <List style={{backgroundColor: "#05003b"}}>
                    {dataDrawer['data'].map((item) => (
                        <ListItem button style={{marginBottom: 10}} key={item.title}>
                            <ListItemIcon style={{color: "#d1d1d1"}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography style={{color: "#d1d1d1", fontSize: "12px"}}>
                                        {item.title}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main>
                <div className={classes.drawerHeader}/>
            </main>
        </div>
    );
}
