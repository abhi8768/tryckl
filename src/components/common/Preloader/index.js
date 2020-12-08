import React from 'react';
import './style.css';

export const Preloader = () => {
  return (
      <div id="preloader">
          <div className="preloaderIcon" >
             <img style={{height : '100px'}} src="/assets/img/tryckl-loader.gif"   /> 
          </div>
      </div>
  );
};
