import { button, label } from "bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectSpecificRecipeQuantity,
} from "../../store/cart/selectors";
import {
  selectSpecificRecipe,
  selectOneRecipe,
} from "../../store/recipes/selectors";
import { getRecipes } from "../../store/recipes/actions";
import { addOneToCart, removeOneFromCart } from "../../store/cart/actions";

export default function CartButtonInRecipeCard(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const specificRecipe = useSelector(selectOneRecipe(props.id));

  const specificRecipeQuantity = useSelector(
    selectSpecificRecipeQuantity(props.id)
  );
  const cart = useSelector(selectCartItems());
  const isInCart = cart?.find((item) => {
    return item.recipe.id === props.id;
  });
  //console.log("is in cart:", isInCart)

  return (
    <div>
      {isInCart ? (
        <>
          <button
            size="sm"
            variant="primary"
            onClick={() => {
              console.log("click");
              dispatch(removeOneFromCart(specificRecipe));
            }}
          >
            -
          </button>
          <label>{specificRecipeQuantity} In Cart</label>
          <button
            size="sm"
            variant="primary"
            onClick={() => dispatch(addOneToCart(specificRecipe))}
          >
            +
          </button>
        </>
      ) : (
        <>
          <label>Add To Cart</label>
          <button
            size="sm"
            variant="primary"
            onClick={() => {
              console.log("click");
              dispatch(addOneToCart(specificRecipe));
            }}
          >
            +
          </button>
        </>
      )}
    </div>
  );
}
