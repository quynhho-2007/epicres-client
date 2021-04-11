export const selectSpecificRecipeQuantity = (id) => (reduxState) => {
  const clonedCart = reduxState.cart.items;
  const specificRecipeQuantity = clonedCart.map((item) => {
    if (item.quantity) {
      if (item.recipe.id === id) {
        return item.quantity;
      } else {
        return null;
      }
    } else {
      return null;
    }
  });
  return specificRecipeQuantity;
};
//need total Cart Price

//need all cart items
export const selectCartItems = (reduxState) => reduxState.items;
