import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const PurpleSwitch = withStyles({
 
  checked: {},
  track: {},
})(Switch);


export default function CustomizedSwitches(props) {
  const [state, setState] = React.useState({
    checkedA: props.switch_value,
 
  });

  const handleChange = (event) => {
    //console.log(event.target.checked);
    setState({[event.target.name]: event.target.checked });
    props.changeSwitch(event.target.checked);
  };

  return (
   
      <FormControlLabel
        control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary"/>}
        label=""
      />
  );
}