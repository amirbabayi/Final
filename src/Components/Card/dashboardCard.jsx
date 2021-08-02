import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {DoubleLineChart} from "../Charts/bigChart";
import {allData} from "../../data/dashboardData";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: 19,
    },
    tab: {
        width: "10",
    },
    color: {
        backgroundColor: "#ff5e15",
        color: "white",
        textTransform: "capitalize",
        padding: 21,
        marginTop: 25,
        marginBottom: 32,
        "&:hover": {
            backgroundColor: "#ff5407 ",
        },
    },
    onlineStore: {
        fontWeight: 400,
        fontSize: 12,
        color: "#a3a3a3",
        paddingRight: 10,
    },
    current: {
        fontSize: 28,
        fontWeight: 600,
        paddingTop: 25,
        color: "#071537",
    },
    price: {
        fontSize: 16,
        fontWeight: 600,
        color: "#071537",
    },
}));

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item container lg={2} md={2} sm={2} xs={7} alignItems="center">
                    <p style={{fontSize: 14, fontWeight: 600, color: "#071537"}}>
                        Dashboard
                    </p>
                    <p style={{fontSize: 11, color: "#a3a3a3"}}>
                        OverView Of Latest Month
                    </p>
                </Grid>
                <Grid item container lg={8} md={10} sm={10} xs={12} justify={"center"} style={{marginBottom: 10}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {allData['tab'].map((item) => (
                            <Tab label={item.label} style={item.style}/>
                        ))}
                    </Tabs>
                </Grid>
                <Grid item container lg={2} md={12} sm={12} xs={12} justify={"flex-end"} alignItems="center">
                    {allData["data"].map((item) => (
                        <Grid item justify={"center"} className={classes.onlineStore}>
                            {item.icon} {item.note}
                        </Grid>
                    ))}
                </Grid>
                <Grid item container>
                    <Grid item lg={3} md={3} sm={4} xs={12}>
                        {allData['node'].map((item) => (
                            <Grid container item xs={10} className={classes.current}>
                                {item.num}
                                <Grid container item style={{fontSize: 11, color: "#a3a3a3"}}>
                                    {item.note}
                                </Grid>
                            </Grid>
                        ))}
                        <Grid container item>
                            <Button
                                variant="contained"
                                className={classes.color}
                                size="small"
                            >
                                <p style={{fontSize: 12}}>Last Month Summary</p>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justify={"center"}
                        lg={9}
                        md={9}
                        sm={8}
                        xs={12}
                        alignItems="center"
                    >
                        <DoubleLineChart/>
                    </Grid>
                </Grid>

                {allData['test'].map((item) => (
                    <Grid
                        item
                        container
                        justify="space-evenly"
                        lg={3}
                        md={3}
                        sm={3}
                        xs={6}
                        style={{paddingTop: 20}}
                    >
                        <Grid item alignItems="center" justify="flex-start">
                            <Avatar style={item.color}>{item.icon}</Avatar>
                        </Grid>
                        <Grid
                            item
                            alignItems="center"
                            justify="flex-start"
                            style={{fontSize: 11, color: "#a3a3a3"}}
                        >
                            {item.title}
                            <div className={classes.price}>
                                {item.note}
                            </div>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
