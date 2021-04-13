export const selectAllRecipes = () => (reduxState) => reduxState.recipes.all;
export const selectPopularRecipes = () => (reduxState) =>
  reduxState.recipes.popular;

export const selectSpecificRecipe = (id) => (reduxState) =>
  reduxState.recipes.specific;

export const selectOneRecipe = (id) => (reduxState) => {
  const clonedRecipes = [...reduxState.recipes?.all];

  const specificRecipe = clonedRecipes?.find((recipe) => {
    return id === recipe.id;
  });

  return specificRecipe; //need total Cart Price
};

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
    filterBy.length > 3 //3 is the length of Option "All"
      ? sortedRecipes.filter((r) => {
          console.log("R", r);
          return r.tags.find((t) => t.title === filterBy);
        })
      : [...sortedRecipes];
  // const result = roles.filter(role => role.groups.find(group => user.groups.includes(group.id)));
  console.log("filterRecipessss", filteredRecipes);
  console.log("filterby", filterBy);
  console.log("lenght");
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
