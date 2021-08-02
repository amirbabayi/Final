import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";
import {blue, green} from "@material-ui/core/colors";

const colorTomato = {
    color: "white",
    backgroundColor: "#ff4133",
    "&:hover": {
        backgroundColor: "#ff2e00 ",
    }
}
const colorGreen = {
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
        backgroundColor: "#40d446 ",
    }
}
const colorBlue = {
    color: "white",
    backgroundColor: blue[500],
    "&:hover": {
        backgroundColor: "#46adff ",
    }
}
export const tableData = {
    icon: [
        {
            icon: <ErrorIcon fontSize="small"/>,
        },
        {
            icon: <DeleteIcon fontSize="small"/>,
        },
        {
            icon: <DescriptionIcon fontSize="small"/>,
        },
    ],
    heads: [
        {
            head: "INVOICE"
        },
        {
            head: "COSTUMERS"
        },
        {
            head: "FORMS"
        },
        {
            head: "PRICE"
        },
        {
            head: "STATUS"
        },
    ],
    data: [
        {
            name: 12386,
            COSTUMERS: "Charly Dues",
            FORMS: "Brazil",
            PRICE: "$299",
            STATUS: "Process",
            color: colorTomato,
        },
        {
            name: 12386,
            COSTUMERS: "Marko",
            FORMS: "Italy",
            PRICE: "$2642",
            STATUS: "Open",
            color: colorGreen,
        },
        {
            name: 12386,
            COSTUMERS: "Deniyel Onak",
            FORMS: "Russia",
            PRICE: "$981",
            STATUS: "On Hold",
            color: colorBlue,
        },
        {
            name: 12386,
            COSTUMERS: "Belgiri Bastana",
            FORMS: "Korea",
            PRICE: "$369",
            STATUS: "Process",
            color: colorTomato,
        },
        {
            name: 12386,
            COSTUMERS: "Sarti Onuska",
            FORMS: "Japan",
            PRICE: "$1240",
            STATUS: "Open",
            color: colorGreen,
        },
    ],
}