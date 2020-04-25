import React from 'react';
import Aux from '../../../hoc/Auxiliary';

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
            <button>CANCLE</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default orderSummery;