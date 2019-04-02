import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.5,
    bacon: 1
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 3,
        isPurchasable: false
    }

    addIngredientHandler = (type) => {
        const currentIngredients = { ...this.state.ingredients };
        currentIngredients[type] = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: currentIngredients
        });
        this.updatePurchaseState(currentIngredients);
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        const currentIngredients = { ...this.state.ingredients };
        currentIngredients[type] = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({
            totalPrice: newPrice,
            ingredients: currentIngredients
        });
        this.updatePurchaseState(currentIngredients);
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(key =>
                ingredients[key])
            .reduce((sum, value) => sum + value, 0);
        this.setState({
            isPurchasable: sum > 0
        });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIg={this.addIngredientHandler}
                    removeIg={this.removeIngredientHandler}
                    disableCtrl={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.isPurchasable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;