import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import CreateIcon from "@material-ui/icons/Create";
import MoodIcon from "@material-ui/icons/Mood";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ListIcon from "@material-ui/icons/List";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PostAddIcon from "@material-ui/icons/PostAdd";
import React from "react";

export const dataDrawer = {


    data: [
        {
            title: "Dashboard",
            icon: <HomeIcon style={{fontSize: 15}}/>,
        },
        {
            title: "UI Elements",
            icon: <FitnessCenterIcon style={{fontSize: 15}}/>,
        },
        {
            title: "Advanced UI",
            icon: <EqualizerIcon style={{fontSize: 15}}/>,
        },
        {title: "Editors", icon: <CreateIcon style={{fontSize: 15}}/>},

        {title: "Icons", icon: <MoodIcon style={{fontSize: 15}}/>},
        {
            title: "Maps",
            icon: <LocationOnIcon style={{fontSize: 15}}/>,
        },
        {
            title: "User Pages",
            icon: <PersonIcon style={{fontSize: 15}}/>,
        },
        {
            title: "Error Pages",
            icon: <MoodBadIcon style={{fontSize: 15}}/>,
        },
        {
            title: "General Pages",
            icon: <DescriptionIcon style={{fontSize: 15}}/>,
        },
        {title: "E-mail", icon: <EmailIcon style={{fontSize: 15}}/>},
        {
            title: "Calendar",
            icon: <CalendarTodayIcon style={{fontSize: 15}}/>,
        },
        {
            title: "Todo List",
            icon: <ListIcon style={{fontSize: 15}}/>,
        },
        {
            title: "Gallery",
            icon: <PhotoCameraIcon style={{fontSize: 15}}/>,
        },
        {
            title: "Documentation",
            icon: <PostAddIcon style={{fontSize: 15}}/>,
        },
    ],
}