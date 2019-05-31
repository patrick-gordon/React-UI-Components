import React from 'react';
import './Display.css';

const CalcDisplay = (props) => {
    return(
        <div className={props.buttonStyle}> {props.text} </div>
    );
}

export default CalcDisplay