import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import recipes from "./recipes/reducer";
import tags from "./tags/reducer";

export default combineReducers({
  appState,
  user,
  recipes,
  tags,
});
