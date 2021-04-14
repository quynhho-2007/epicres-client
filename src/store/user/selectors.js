export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectFavorites = () => (reduxState) => reduxState.user.favorites;
//remember () in useSelector
