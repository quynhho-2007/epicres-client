export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectFavorites = () => (reduxState) => {
  console.log("select Favorites", reduxState.user.favorites);
  return reduxState.user.favorites;
};
//remember () in useSelector
