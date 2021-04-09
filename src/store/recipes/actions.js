import axios from "axios";
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

export async function fetchNext5Recipes(dispatch, getState) {
  dispatch(startLoading());
  const offset = getState().recipes.length;
  console.log("offset: ", offset);

  const res = await axios.get(
    `${apiUrl}/recipes?offset=${offset}&limit=${DEFAULT_PAGINATION_LIMIT}`
  );

  const moreRecipes = res.data;

  dispatch(recipesFetched(moreRecipes));
}

export const startLoading = () => ({
  type: "recipes/startLoading",
});

export const recipesFetched = (moreRecipes) => ({
  type: "recipes/recipesFetched",
  payload: moreRecipes,
});
