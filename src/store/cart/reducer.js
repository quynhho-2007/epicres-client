const initialState = {
  items: [], //[{  recipe: {id: X}, quantity: XX  }]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/addOneToCart": {
      const recipe = action.payload;
      const result = state.items.find((item) => item.recipe.id === recipe.id);
      //if the recipe is not addeded in cart yet
      if (!result) {
        return {
          ...state,
          items: [...state.items, { recipe: recipe, quantity: 1 }],
        };
      }
      //if the recipe is already added in cart
      const addedItem = state.items.map((item) => {
        if (item.recipe.id === recipe.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item; //if the recipe in cart does not have the id of recipe looked for, return the same
        }
      });

      return {
        ...state,
        item: addedItem,
      };
    }
    case "cart/removeOneFromCart": {
      const recipe = action.payload;
      const result = state.items.find((item) => item.recipe.id === recipe.id);
      //if the recipe to remove is in cart and its quantiy is 1
      if (result.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.recipe.id !== recipe.id),
        };
      }
      //if the recipe-to-remove 's quantiy is more than 1
      const removedItem = state.items.map((item) => {
        if (item.recipe.id === recipe.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item; //if the recipe in cart does not have the id of recipe looked for, return the same
        }
      });
      return {
        ...state,
        item: removedItem,
      };
    }
    //case Emty cart

    default: {
      return state;
    }
  }
}
