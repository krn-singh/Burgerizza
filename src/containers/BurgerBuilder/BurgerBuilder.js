import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 2,
            meat: 1,
            bacon: 2,
            salad: 0
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;