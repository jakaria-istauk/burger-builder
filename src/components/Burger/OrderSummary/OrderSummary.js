import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
        return (
        props.ingredients[igKey] > 0 ? 
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>: null );
        } );
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout....</p>
            <Button clicked={props.purchaseCancled} btnType="Danger">CANCLE</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Aux>
    );
};

export default orderSummery;