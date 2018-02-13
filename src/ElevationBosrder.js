import React from 'react';
import './ElevationBosrder.css'

function ElevationBorder(props) {
  return (
    <div className={'FancyBorder'}> 
    {props.children}
    </div>
  );
}

export default ElevationBorder;
