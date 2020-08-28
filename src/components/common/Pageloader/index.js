import React from 'react';
import ReactDOM from 'react-dom';
import { CircularProgress } from '@material-ui/core';
import './style.css';

export const Pageloader = () => {
  return (
      <div id="pageloader">
        {/* <CircularProgress /> */}
        <i className="fa fa-spinner fa-spin large-size" ></i>
      </div>
  );
};
