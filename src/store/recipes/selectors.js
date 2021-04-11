export const selectAllRecipes = () => (reduxState) => reduxState.recipes.all;

// export const selectSpecificRecipe = (id) => (reduxState) => {
//   const clonedRecipes = [...reduxState.recipes.all];

//   const specificRecipe = clonedRecipes.find((r) => {
//     return id === r.id;
//   });
//   return specificRecipe;
// };

export const selectFilteredAndSortedRecipes = (sortBy, filterBy) => (
  reduxState
) => {
  const recipes = reduxState.recipes.all;

  const sortedRecipes = [...recipes].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "time-to-cook") {
      return a.timeToCook - b.timeToCook;
    } else if (sortBy === "popularity") {
      return b.bought - a.bought;
    } else {
      return a.totalPrice - b.totalPrice;
    }
  });
  const filteredRecipes =
    filterBy.length > 0
      ? sortedRecipes.filter((r) => filterBy.includes(r.tags.title))
      : [...sortedRecipes];

  return filteredRecipes;
  // if (!filterBy.length) {
  //   return [...sortedRecipes];
  // }
  // if (filterBy === "Ingredients") {
  //   const filteredRecipes = sortedRecipes.filter((r) =>
  //     filterBy.includes(r.ingredients.title)
  //   );
  //   return filteredRecipes;
  // } else {
  //   const filteredRecipes = sortedRecipes.filter((r) =>
  //     filterBy.includes(r.tags.title)
  //   );
  //   return filteredRecipes;
  // }
};
