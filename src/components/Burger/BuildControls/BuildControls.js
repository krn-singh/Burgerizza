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
        {controls.map((ctrl) => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIg={() => props.addIg(ctrl.type)}
                removeIg={() => props.removeIg(ctrl.type)} 
                disableCtrl={props.disableCtrl[ctrl.type]}/>
        ))}
    </div>
);

export default buildControls;