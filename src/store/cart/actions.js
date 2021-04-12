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

export const emptyCart = () => {
  return {
    type: "cart/emptyCart",
  };
};

export const removeFromCart = (recipe) => {
  return {
    type: "cart/removeFromCart",
    payload: recipe,
  };
};
