import React from "react";
import {withStyles, makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import {green, blue} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DescriptionIcon from "@material-ui/icons/Description";
import ErrorIcon from "@material-ui/icons/Error";
import InputBase from "@material-ui/core/InputBase";
import PaginationLink from "../Pagination/pagination";
import {Paper} from "@material-ui/core";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#ebf5f5",
        color: "black",
    },
    body: {
        fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        // '&:nth-of-type(odd)': {
        //   backgroundColor: theme.palette.action.hover,
        // },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        width: 900,
    },
    color: {
        backgroundColor: "#ff5e15",
        color: "white",
        padding: "7px 15px",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "#ff5407 ",
        }

    },
    colorButton: {
        backgroundColor: "#ebf5f5",
        color: "black",
        padding: "10px 0",
        "&:hover": {
            backgroundColor: "#dfffff ",
        }
    },
    tomato: {
        color: "white",
        backgroundColor: "#ff4133",
        "&:hover": {
            backgroundColor: "#ff2e00 ",
        }
    },
    green: {
        color: "white",
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: "#40d446 ",
        }
    },
    blue: {
        color: "white",
        backgroundColor: blue[500],
        "&:hover": {
            backgroundColor: "#46adff ",
        }
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    const icon = [
        {
            icon: <ErrorIcon fontSize="small"/>,
        },
        {
            icon: <DeleteIcon fontSize="small"/>,
        },
        {
            icon: <DescriptionIcon fontSize="small"/>,
        },
    ];

    const data = [
        {
            name: 12386,
            calories: "Charly Dues",
            fat: "Brazil",
            carbs: "$299",
            protein: "Process",
            color: [classes.tomato],
        },
        {
            name: 12386,
            calories: "Marko",
            fat: "Italy",
            carbs: "$2642",
            protein: "Open",
            color: [classes.green],
        },
        {
            name: 12386,
            calories: "Deniyel Onak",
            fat: "Russia",
            carbs: "$981",
            protein: "On Hold",
            color: [classes.blue],
        },
        {
            name: 12386,
            calories: "Belgiri Bastana",
            fat: "Korea",
            carbs: "$369",
            protein: "Process",
            color: [classes.tomato],
        },
        {
            name: 12386,
            calories: "Sarti Onuska",
            fat: "Japan",
            carbs: "$1240",
            protein: "Open",
            color: [classes.green],
        },
    ];
    return (
        <Paper>
            <Grid container>
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
                            md={7}
                        >
                            <Grid container item lg={2} md={2}>
                                <Button variant="contained" className={classes.color} size="small">
                                    <AddCircleIcon style={{fontSize: 14}}/>
                                    <p style={{fontSize: 14}}>Add</p>
                                </Button>
                            </Grid>
                            {icon.map((item) => (
                                <Grid container item lg={2} md={2}>
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
                        <Grid item container justify={"flex-end"} alignItems="center" lg={5} md={5}>
                            <Grid container item lg={7} md={7}>
                                <InputBase
                                    placeholder="Search"
                                    style={{
                                        backgroundColor: "#ebf5f5",
                                        padding: "5px 0 5px 25px",
                                        fontSize: 14,
                                        borderRadius: 3,
                                    }}
                                />
                            </Grid>
                            <Grid container item lg={2} md={2}>
                                <Button className={classes.colorButton} color="default">
                                    <DescriptionIcon fontSize="small"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container justify={"flex-end"} style={{marginTop: 10}}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>INVOICE</StyledTableCell>
                                    <StyledTableCell align="left">COSTUMERS</StyledTableCell>
                                    <StyledTableCell align="left">FORMS</StyledTableCell>
                                    <StyledTableCell align="left">PRICE</StyledTableCell>
                                    <StyledTableCell align="left">STATUS</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                                className={row.color}
                                                style={{textTransform: "none"}}
                                            >
                                                {row.protein}
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item container alignItems="center" justify="space-between">
                        <Grid item alignItems="center" lg={9}>
                            <Typography>
                                <p style={{fontSize: 12, color: "#a3a3a3", marginTop: 10}}>
                                    Showing 1 to 20 of 20 entries
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item alignItems="center" lg={3}>
                            <PaginationLink/>
                        </Grid>
                    </Grid>
                </TableContainer>
            </Grid>
        </Paper>
    );
}
