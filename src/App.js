import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ShoppableRecipes from "./pages/ShoppableRecipes";
import Cart from "./pages/Cart";

import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={ShoppableRecipes} />
        <Route path="/cart" component={Cart} />
        <Route path="/:recipeId" component={RecipeDetailsPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
