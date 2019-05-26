import React from 'react';
import BurgerIcon from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={BurgerIcon}/>
    </div>
);

export default logo;