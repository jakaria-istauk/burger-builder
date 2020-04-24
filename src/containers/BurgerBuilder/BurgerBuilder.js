import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES ={
    salad: 20.09,
    cheese: 30.50,
    meat: 50.30,
    beef: 60.10
};

class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }

    state ={
        ingredients:{
            salad: 0,
            beef: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 30,
        purchasable: false,
        purchasing: false
    }

    updatePurchase(ingredients){
        const sum = Object.keys(ingredients)
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( (sum, el) =>{
                return sum + el;
            },0);

            this.setState({purchasable: sum > 0 });
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);
    }

    purchaseHandler =() => {
        this.setState({purchasing: true});
    }

    purchaseCancle =()=>{
        this.setState({purchasing: false});
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for( let key in disabledInfo ){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancle}>
                    <OrderSummery ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredient} 
                    ingredientRemoved={this.removeIngredient} 
                    disabled={this.disabledInfo} 
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;