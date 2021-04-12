const initialState = {
  loading: false,
  all: [],
  popular: [],
  specific: [],
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
        ...state,
        loading: false,
        all: [...state.all, ...action.payload],
      };
    }
    case "recipes/popularRecipesFetched": {
      return {
        ...state,
        loading: false,
        popular: [...state.popular, ...action.payload],
      };
    }
    case "recipes/specificRecipeFetched": {
      return {
        ...state,
        loading: false,
        specific: [...state.specific, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};
