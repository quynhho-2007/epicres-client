const initialState = {
  loading: false,
  recipes: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "recipes/startLoading": {
      console.log("action loading", action);
      return {
        ...state,
        loading: true,
      };
    }
    case "recipes/recipesFetched": {
      console.log("action", action);

      console.log("action.payload: ", action.payload);
      return {
        loading: false,
        recipes: [...state.recipes, ...action.payload],
      };
    }
    //I went back to server: defined offset = 4 ( 4 results to skip) & limit = 4 (4 results are on a page)
    //If put offset to 4, you'll skip the first 4 products and receive the products starting with the 5th product)
    //in total: 8 products
    //1st: if products: [state.products, ...action.payload]: load first 4, click button Load more, load last 3, skip 5th one
    //2nd: if products: [...action.payload], load first 4, click button Load more, load last 4
    //the DIFFERENCE: the 2nd doesn't skip the 5th product when click button
    //SOLUTION: products: [...state.product, ...action.payload]: make a copy of first 4
    //and add the next load of last 4 on top of the first 4 in the array
    //If I don't make a clone of action.payload, no (first 4) products appear at all
    //PROBLEM: start at Homepage with first 4,
    //go to another page in the same app, and go back to Homepage again,
    //the last 4 are loaded next to the already loaded first 4,
    //without clicking the button Load more
    default: {
      return state;
    }
  }
};
