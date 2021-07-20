import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 70,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    backgroundColor: "white",
    border: "1px solid white  ",
    width: "10",
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

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="name-native-disabled">Monthly</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="Age"
          className={classes.select}
          inputProps={{
            // className: classes.input,
            // name: "age",
            // id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}
