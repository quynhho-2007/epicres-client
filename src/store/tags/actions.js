import axios from "axios";
import { apiUrl } from "../../config/constants";

export const getTags = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    if (!getState().recipes.all.length) {
      const res = await axios.get(`${apiUrl}/tags/`);
      dispatch(tagsFetched(res.data));
      console.log("tags", res.data);
    }
  } catch (e) {
    console.log(e);
  }
};

export const startLoading = () => ({
  type: "tags/startLoading",
});

export const tagsFetched = (data) => ({
  type: "tags/tagsFetched",
  payload: data,
});
