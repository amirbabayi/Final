import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ChartDoughnut from "../Charts/doghnutChart";

const useStyles = makeStyles({
    root: {
        padding: 25,
    },
});

export default function Chart() {
    const classes = useStyles();
    const data = [
        {
            num: "34%",
            note: "Facebook",
            icon: <FiberManualRecordIcon style={{fontSize: 13, color: "#23a1ff"}}/>,
        },
        {
            num: "55%",
            note: "Youtube",
            icon: <FiberManualRecordIcon style={{fontSize: 13, color: "#ff5f16"}}/>,
        },
        {
            num: "11%",
            note: "Direct Search",
            icon: <FiberManualRecordIcon style={{fontSize: 13, color: "#ffc700"}}/>,
        },
    ];

    return (
        <Paper className={classes.root}>
            <Grid container>
                <Grid item container>
                    <h5 style={{color: "#071537"}}>Traffic</h5>
                </Grid>
                <Grid item container justify={"center"}>
                    <ChartDoughnut/>
                </Grid>
                {data.map((item) => (
                    <Grid
                        item
                        container
                        alignItems="center"
                        justify="center"
                        lg={4}
                        md={4}
                        sm={4}
                        xs={11}
                        style={{fontWeight: "bold", fontSize: 33, color: "#071537",paddingBottom:10}}
                    >
                        {item.num}
                        <Grid container item justify="center" style={{fontWeight: 400, fontSize: 12, color: "#a3a3a3"}}>
                            {item.icon} {item.note}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}
