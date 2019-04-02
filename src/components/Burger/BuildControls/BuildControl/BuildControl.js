import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removeIg}
            disabled={props.disableCtrl} >Less</button>
        <button className={classes.More} onClick={props.addIg}>More</button>
    </div>
);

export default buildControl;