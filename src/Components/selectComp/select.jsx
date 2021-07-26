import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 110,
    minHeight:20,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    backgroundColor: "white",
    border: "none",
    '&:hover':{
      backgroundColor:"white"
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
          inputProps={{
            // className: classes.input,
            // name: "age",
            // id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Daily</option>
          <option value={10}>Weekly</option>
          <option value={20}>Monthly</option>
          <option value={30}>Yearly</option>
        </Select>
      </FormControl>
    </div>
  );
}


// /* eslint-disable no-use-before-define */
// /* eslint-disable no-use-before-define */
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
//
// export default function Filter() {
//   return (
//       <Autocomplete
//           // id="combo-box-demo"
//           // options={top100Films}
//           // getOptionLabel={(option) => option.title}
//           style={{ width: 72,backgroundColor:"white",border:"none" }}
//           renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
//       />
//   );
// }
//
// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// // const top100Films = [
// //   { title: 'The Shawshank Redemption', year: 1994 },
// //   { title: 'The Godfather', year: 1972 },
// //   { title: 'The Godfather: Part II', year: 1974 },
// //   { title: 'The Dark Knight', year: 2008 },
// ]
