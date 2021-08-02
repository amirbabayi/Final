import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CakeIcon from "@material-ui/icons/Cake";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const red = {
    color: "white",
    backgroundColor: "#f33926",
}
const pink = {
    color: "white",
    backgroundColor: "#fd7397",
}
const purple = {
    color: "white",
    backgroundColor: "#657adc",
}
const green = {
    color: "white",
    backgroundColor: "#4ba23c",
}
const size = {
    fontSize: 12,
    minWidth: 80,
}


export const allData = {
    data: [
        {
            note: "Online",
            icon: (
                <FiberManualRecordIcon style={{fontSize: 13, color: "#21a2fd"}}/>
            ),
        },
        {
            note: "Store",
            icon: (
                <FiberManualRecordIcon style={{fontSize: 13, color: "#ff5e15"}}/>
            ),
        },
    ],
    node: [
        {
            num: "$3468.96",
            note: "Current Month Earning",
        },
        {
            num: "82",
            note: "Current Month Sales",
        },
    ],

    test: [
        {
            icon: <CakeIcon/>,
            title: "Wallet Balance",
            note: "$4,567.53",
            color: red,
        },
        {
            icon: <FavoriteIcon/>,
            title: "Referral Earning",
            note: "$1689.53",
            color: purple,
        },
        {
            icon: <LoyaltyIcon/>,
            title: "Estimate Sales",
            note: "$2851.53",
            color: green,
        },
        {
            icon: <CakeIcon/>,
            title: "Earning",
            note: "$52,567.53",
            color: pink,
        },
    ],

    tab: [
        {
            label: "DAILY",
            style: size,
        },
        {
            label: "WEEKLY",
            style: size,
        },
        {
            label: "MONTHLY",
            style: size,
        },
        {
            label: "YEARLY",
            style: size,
        },
    ],
}

