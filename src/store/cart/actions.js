export const addOneToCart = (recipe) => {
  return {
    type: "cart/addOneToCart",
    payload: recipe,
  };
};

export const removeOneFromCart = (recipe) => {
  return {
    type: "cart/removeOneFromCart",
    payload: recipe,
  };
};
