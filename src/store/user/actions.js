import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

//To get all favorite recipes of a user
export const getFavorites = () => async (dispatch, getState) => {
  try {
    // console.log(tokenNeeded)
    const tokenNeeded = selectToken(getState());
    const favorites = await axios.get(`${apiUrl}/favorites`, {
      headers: {
        Authorization: `Bearer ${tokenNeeded}`,
      },
    });
    // console.log("favorites test", favorites)

    dispatch(setFavorites(favorites.data));
    console.log("favorites.data", favorites.data);
  } catch (error) {
    console.log(error.message);
  }
};

//To remove favorites
export const removeFavorite = (id) => async (dispatch, getState) => {
  try {
    const tokenNeeded = selectToken(getState());
    const deleteFavorite = await axios.delete(
      `${apiUrl}/favorites/recipes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${tokenNeeded}`,
        },
      }
    );
    // console.log("remove favorite test", deleteFavorite)
    dispatch(notFavorite(deleteFavorite.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const notFavorite = (favoriteData) => ({
  type: "user/setNotFavoriteRecipe",
  payload: favoriteData,
});

//To add favorites
export const newFavorite = (id) => async (dispatch, getState) => {
  try {
    const tokenNeeded = selectToken(getState());
    // console.log("token", tokenNeeded);
    const sendFavorite = await axios.post(
      `${apiUrl}/favorites/recipes/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenNeeded}`,
        },
      }
    );
    // console.log("id in action fav", id);
    // console.log("new favorite test", sendFavorite);

    dispatch(setFavorites(sendFavorite.data));
    console.log("sendFavorite", sendFavorite);
  } catch (e) {
    console.log(e);
  }
};

export const setFavorites = (favoriteData) => ({
  type: "user/setFavoriteRecipe",
  payload: favoriteData,
});

//To Logout
export const logOut = () => ({ type: LOG_OUT });

//To Signup
export const signUp = (firstName, lastName, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "Account Created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

//To Login
export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "Welcome Back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

//To validate user === Check if it's a valid user
export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        //The GET/me endpoint can be used to:
        // - get the users email & name using only their token
        // - checking if a token is (still) valid
        // don't send back the password hash
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid: Check If Valid User ?
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});
