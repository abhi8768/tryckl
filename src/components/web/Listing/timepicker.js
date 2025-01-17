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
  let [selectedDate, setSelectedDate] = React.useState(new Date().getTime());
  if(sessionStorage.getItem('createlisting')){
     [selectedDate, setSelectedDate] = React.useState(JSON.parse(sessionStorage.getItem('createlisting')).time_display);
  }
  const handleDateChange = (date) => {
    props.setTime(date);
    setSelectedDate(date);
  
  };
 

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label=""
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
  );
}