export const selectSpecificRecipeQuantity = (id) => (reduxState) => {
  const clonedCart = reduxState.cart.items;
  const specificRecipeQuantity = clonedCart?.map((item) => {
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

//need all cart items
export const selectCartItems = () => (reduxState) => reduxState.cart.items;

//need total Cart Price
export const selectTotalCartPrice = () => (reduxState) => {
  const totalPrice = [...reduxState.cart.items];
  return totalPrice.reduce((a, c) => a + c.recipe.totalPrice * c.quantity, 0);
};
