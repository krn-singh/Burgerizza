import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIg={() => props.addIg(ctrl.type)}
                removeIg={() => props.removeIg(ctrl.type)}
                disableCtrl={props.disableCtrl[ctrl.type]} />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing} >Order Now</button>
    </div>
);

export default buildControls;