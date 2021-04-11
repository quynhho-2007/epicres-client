const initialState = {
  loading: false,
  all: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "tags/startLoading": {
      console.log("action loading", action);
      return {
        ...state,
        loading: true,
      };
    }
    case "tags/tagsFetched": {
      console.log("action", action);

      console.log("action.payload: ", action.payload);
      return {
        loading: false,
        all: [...state.all, ...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};
