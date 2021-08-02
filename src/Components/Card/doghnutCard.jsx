import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChartDoughnut from "../Charts/doghnutChart";
import {dataProps} from "../../data/doughnutData";

const useStyles = makeStyles({
    root: {
        padding: 25,
    },
    number: {
        fontWeight: "bold", fontSize: 33, color: "#071537", paddingBottom: 10
    },
    iconNote: {
        fontWeight: 400, fontSize: 12, color: "#a3a3a3"
    }
});

export default function Chart() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item container>
                    <h5 style={{color: "#071537"}}>Traffic</h5>
                </Grid>
                <Grid item container justify={"center"}>
                    <ChartDoughnut/>
                </Grid>
                {dataProps['data'].map((item) => (
                    <Grid
                        item
                        container
                        alignItems="center"
                        justify="center"
                        lg={4}
                        md={4}
                        sm={4}
                        xs={11}
                        className={classes.number}
                    >
                        {item.num}
                        <Grid container item justify="center" className={classes.iconNote}>
                            {item.icon} {item.note}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
