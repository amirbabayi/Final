import {blue, green} from "@material-ui/core/colors";
import ListIcon from "@material-ui/icons/List";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";


const colorPink = {
    color: "white",
    backgroundColor: "#ed669a",
    width: 32,
    height: 32,
}
const colorGreen = {
    color: "white",
    backgroundColor: green[500],
    width: 32,
    height: 32,
}
const colorPurple = {
    color: "white",
    backgroundColor: "#496eb8",
    width: 32,
    height: 32,
}
const colorYellow = {
    color: "white",
    backgroundColor: "gold",
    width: 32,
    height: 32,
}
const colorBlue = {
    color: "white",
    backgroundColor: blue[500],
    width: 32,
    height: 32,
}

export const activitisData = {
    data: [
        {
            date: "42 Min Ago",
            icon: <ListIcon style={{fontSize: 18}}/>,
            title: "Task Update",
            note: <p><b style={{color: "black"}}>Nikolai</b> Update a Taske</p>,
            color: colorPurple,
        },
        {
            date: "1 day Ago",
            icon: <FitnessCenterIcon style={{fontSize: 15}}/>,
            title: "Deal Added",
            note: <p><b style={{color: "black"}}>Panshi</b> Update a Taske</p>,
            color: colorPink,
        },
        {
            date: "42 Min Ago",
            icon: <CreateIcon style={{fontSize: 15}}/>,
            title: "Published Article",
            note: <p><b style={{color: "black"}}>Rasel</b> Published a Article</p>,
            color: colorBlue,
        },
        {
            date: "1 day Ago",
            icon: <FitnessCenterIcon style={{fontSize: 15}}/>,
            title: "Dock Update",
            note: <p><b style={{color: "black"}}>Reshmi</b> Update a Dock</p>,
            color: colorYellow,
        },
        {
            date: "1 day Ago",
            icon: <FitnessCenterIcon style={{fontSize: 15}}/>,
            title: "Replyed Comment",
            note: <p><b style={{color: "black"}}>Jenathon</b> Added a Comment</p>,
            color: colorGreen,
        },
    ],
}