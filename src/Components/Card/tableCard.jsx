import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DescriptionIcon from "@material-ui/icons/Description";
import InputBase from "@material-ui/core/InputBase";
import PaginationLink from "../../Pagination/pagination";
import {Paper} from "@material-ui/core";
import {tableData} from "../../data/tableData";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#ebf5f5",
        color: "black",
    },

    body: {
        fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({}))(TableRow);

const useStyles = makeStyles((theme) => ({

    table: {
        width: "100%",
        overflow: "auto"
    },
    pStyle: {
        fontSize: 12, color: "#a3a3a3", marginTop: 10
    },
    buttonStyle: {
        textTransform: "none"
    },
    color: {
        backgroundColor: "#ff5e15",
        color: "white",
        padding: "7px 15px",
        justifyContent: "center",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "#ff5407 ",
        },

        [theme.breakpoints.down('xs')]: {
            marginBottom: 10,
            width: "100%"
        }


    },
    input: {
        backgroundColor: "#ebf5f5",
        padding: "5px 0 5px 25px",
        fontSize: 14,
        borderRadius: 3,
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
            width: "84%"
        }
    },
    colorButton: {
        backgroundColor: "#ebf5f5",
        color: "black",
        padding: "10px 0",
        "&:hover": {
            backgroundColor: "#dfffff ",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 10,
            width: "84%"
        }
    },

}));

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <Grid container item justify={"center"} alignItems={"center"} sm={10} xs={11}>
            <Grid container item justify={"center"}>
                <TableContainer style={{backgroundColor: "white", padding: 25}}>
                    <Grid item container style={{marginBottom: 10}}>
                        <Typography>
                            <p style={{fontSize: 14, fontWeight: 600}}>Order Status</p>
                            <p style={{fontSize: 12, color: "#a3a3a3"}}>
                                OverView Of Latest Month
                            </p>
                        </Typography>
                    </Grid>
                    <Grid item container justify="space-between">
                        <Grid
                            item
                            container
                            justify={"flex-start"}
                            alignItems="center"
                            lg={7}
                            md={8}
                            sm={7}
                            xs={12}
                        >
                            <Grid container item lg={2} md={2} sm={3} xs={10}>
                                <Button variant="contained" className={classes.color} size="small">
                                    <AddCircleIcon style={{fontSize: 14, marginRight: 5}}/>
                                    <p style={{fontSize: 14}}> Add </p>
                                </Button>
                            </Grid>
                            {tableData["icon"].map((item) => (
                                <Grid container justify={"flex-start"} item lg={2} md={2} sm={3} xs={12}>
                                    <Button
                                        className={classes.colorButton}
                                        color="default"
                                        style={{fontSize: 10}}
                                    >
                                        {item.icon}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item container justify={"center"} alignItems="center" lg={5} md={4} sm={5}
                              xs={12}>
                            <Grid container item lg={8} md={10} sm={10} xs={12}>
                                <InputBase
                                    placeholder="Search"
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid container item lg={1} md={2} sm={2} xs={12}>
                                <Button className={classes.colorButton} color="default">
                                    <DescriptionIcon fontSize="small"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container justify={"center"} style={{marginTop: 10}}>
                        <Paper className={classes.table}>
                            <Table responsive>
                                <TableHead>
                                    <TableRow>
                                        {tableData["heads"].map(item =>(
                                            <StyledTableCell align="left">{item.head}</StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData["data"].map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="left">{row.COSTUMERS}</StyledTableCell>
                                            <StyledTableCell align="left">{row.FORMS}</StyledTableCell>
                                            <StyledTableCell align="left">{row.PRICE}</StyledTableCell>
                                            <StyledTableCell align="left">
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="primary"
                                                    style={row.color}
                                                    className={classes.buttonStyle}
                                                >
                                                    {row.STATUS}
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item container alignItems="center" justify="space-between">
                        <Grid item alignItems="center" lg={8} md={6} sm={6} xs={10}>
                            <Typography>
                                <p className={classes.pStyle}>
                                    Showing 1 to 20 of 20 entries
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item alignItems="center" lg={4} md={4} sm={6} xs={12}>
                            <PaginationLink/>
                        </Grid>
                    </Grid>
                </TableContainer>
            </Grid>
        </Grid>
    );
}
