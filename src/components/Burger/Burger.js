import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './Burgerinfredient/Burgerinfredient';

const burger = (props) => {

    let ingredient = Object.keys(props.ingredients)
                    .map( igKey =>{                        
                        return [...Array(props.ingredients[igKey])].map((_, i) => {
                            return <BurgerIngredient key={ igKey + i } type={igKey} />;
                        });
                    } )
                    .reduce((arr, el) =>{
                        return arr.concat(el)
                    },[]);

    if( ingredient.length === 0 ){
        ingredient = <p>Please Start adding ingredients!</p>;
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;