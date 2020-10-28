import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));



export default function CustomizedTooltips() {
  return (
    
    <LightTooltip title="Atleast 8 charecters, 1 Capital Letter, 1 Small Letter, 1 numeric Charecter, 1 special charecter" placement="right">
        <em className="fa-2x mr-2 fas fa-info-circle"></em>
    </LightTooltip>
   
  );
}