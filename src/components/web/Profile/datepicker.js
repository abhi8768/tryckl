import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
 
  let [selectedDate, setSelectedDate] = React.useState(new Date()); //original
  //let [selectedDate, setSelectedDate] = React.useState(new Date("1948-09-11")); //testing

  if(JSON.parse(localStorage.getItem('userDetails')).date_of_birth){
      [selectedDate, setSelectedDate] = React.useState(JSON.parse(localStorage.getItem('userDetails')).date_of_birth);
  }
  const handleDateChange = (date) => {
    //debugger;
    setSelectedDate(date);
    //props.setDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="space-around"> */}
      <Grid container justify="space-between">
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputProps={{ readOnly: true ,disableUnderline: true,shrink: true}}
        label=""
        format="yyyy-MM-dd"
        style={{width:"80%", marginTop:"15px",border:"none"}}
        value={selectedDate}
        InputAdornmentProps={{ position: "end" }}
        onChange={date => handleDateChange(date)}
        className="broker_dob"
      />
        {/* <KeyboardDatePicker 
          //existing
          // disablePast
          // disableToolbar
          // variant="inline"
          // format="yyyy-MM-dd"
          // margin="normal"
          // id="brokerage_dob"
          // label=""
          // name="brokerage_dob"
          // value={selectedDate}
          // onChange={handleDateChange}
          // KeyboardButtonProps={{
          //   'aria-label': 'change date',
          // }}
          
          //Testing
          // fullWidth
          variant='inline'          
          format='yyyy-MM-dd'
          margin='normal'
          id="brokerage_dob"
          // name="brokerage_dob"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}          
          
        />        */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}