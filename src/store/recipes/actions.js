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
    dispatch(startLoading());
    const res = await axios.get(`${apiUrl}/recipes/popular/`);
    dispatch(popularRecipesFetched(res.data));
    console.log("res.data", res.data);
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
