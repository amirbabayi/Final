import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 110,
        minHeight: 20,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        backgroundColor: "white",
        border: "none",
        '&:hover': {
            backgroundColor: "white"
        }
    },
    input: {
        border: "none",
    },

}));

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: "",
        name: "hai",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const data = [
        {
            date: "Daily"
        },
        {
            date: "Weekly"
        },
        {
            date: "Monthly"
        },
        {
            date: "Yearly"
        },
    ];
    return (
        <div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="name-native-disabled">Monthly</InputLabel>
                <Select
                    disableUnderline
                    native
                    onChange={handleChange}
                    label="Age"
                    className={classes.select}
                >
                    {data.map(item => (
                        <option>{item.date}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
