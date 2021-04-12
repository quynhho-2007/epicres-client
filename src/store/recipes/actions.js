import axios from "axios";
import { apiUrl } from "../../config/constants";

export const getRecipes = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${apiUrl}/recipes/`);
    dispatch(recipesFetched(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const getPopularRecipes = () => async (dispatch, getState) => {
  try {
    const offset = getState().recipes.popular.length;
    console.log("getState: ", getState().recipes.popular.length);

    console.log("offset: ", offset);

    dispatch(startLoading());
    const res = await axios.get(
      `${apiUrl}/recipes/popular?offset=${offset}&limit=3`
    );
    dispatch(popularRecipesFetched(res.data));
    console.log("res.data", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const getSpecificRecipes = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${apiUrl}/recipes/${id}`);

    dispatch(specificRecipeFetched(res.data));
    console.log("specific recipeeee:", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const startLoading = () => ({
  type: "recipes/startLoading",
});

export const recipesFetched = (data) => ({
  type: "recipes/recipesFetched",
  payload: data,
});

export const popularRecipesFetched = (data) => ({
  type: "recipes/popularRecipesFetched",
  payload: data,
});

export const specificRecipeFetched = (specificRecipe) => ({
  type: "recipes/specificRecipeFetched",
  payload: specificRecipe,
});
