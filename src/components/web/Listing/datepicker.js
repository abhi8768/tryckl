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
 
  let [selectedDate, setSelectedDate] = React.useState(new Date());
  if(sessionStorage.getItem('createlisting')){
      [selectedDate, setSelectedDate] = React.useState(JSON.parse(sessionStorage.getItem('createlisting')).date_display);
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.setDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker 
          disablePast
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label=""
         
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
  );
}