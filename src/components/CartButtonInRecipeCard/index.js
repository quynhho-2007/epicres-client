import { Button } from "bootstrap";
import React from "react";
import {useSelector} from "react-redux"
import { selectCartItems, selectSpecificRecipeQuantity } from "../../store/cart/selectors";
export default function CartButtonInRecipeCard(props) {
    const specificRecipeQuantity = useSelector(selectSpecificRecipeQuantity)
    const cart = useSelector(selectCartItems)
    const isInCart = cart.find(item => {
        return item.recipe.id === props.recipe.id
    })
    //console.log("is in cart:", isInCart)
  return (<> 
{
    isInCart ? (<> <Button> - </Button> <p>{ specificRecipeQuantity} in cart </p> </>) 
}
  </>);
}
