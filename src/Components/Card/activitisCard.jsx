import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import {Paper} from "@material-ui/core";
import {activitisData} from "../../data/activitisData";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 420,
        backgroundColor: theme.palette.background.paper,
        padding: 20,
    },
    noteStyle: {
        textAlign: "center", fontWeight: 400, fontSize: 12, paddingTop: 10, color: "#a3a3a3",
    },
    titleStyle: {
        fontWeight: 600, fontSize: 14, color: "black"
    },
    dateStyle: {
        color: "#a3a3a3", fontSize: 12, paddingBottom: 20
    }
}));

export default function FolderList() {
    const classes = useStyles();

    return (
        <Paper>
            <List className={classes.root}>
                <h5 style={{color: "black", marginBottom: 20}}>Recent Activities</h5>
                {activitisData["data"].map((item) => (
                    <Grid container justify='space-evenly' style={{marginBottom: 40,}}>
                        <Grid item container alignItems="center" justify='flex-start' lg={4} md={4} sm={4} xs={12}
                              className={classes.dateStyle}>
                            {item.date}
                        </Grid>
                        <Grid item container alignItems="center" justify='flex-start' lg={2} md={2} sm={2} xs={2}>
                            <Avatar style={item.color}>{item.icon}</Avatar>
                        </Grid>
                        <Grid item container alignItems="center" justify='flex-start' lg={6} md={6} sm={6} xs={9}
                              className={classes.titleStyle}>
                            <Grid container item>
                                {item.title}
                            </Grid>
                            <Grid container item className={classes.noteStyle}>
                                {item.note}
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </List>
        </Paper>
    );
}






