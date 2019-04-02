import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => 
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}        
            </li>
            );
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delcious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
}

export default orderSummary;