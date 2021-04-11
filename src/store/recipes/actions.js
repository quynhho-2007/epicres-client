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

export const startLoading = () => ({
  type: "recipes/startLoading",
});

export const recipesFetched = (data) => ({
  type: "recipes/recipesFetched",
  payload: data,
});
