import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Container,
  Button,
  Jumbotron,
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Carousel,
} from "react-bootstrap";
import { getPopularRecipes, getRecipes } from "../../store/recipes/actions";
import {
  selectAllRecipes,
  selectFilteredAndSortedRecipes,
  selectPopularRecipes,
} from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";
import RecipeDetailsPage from "../../pages/RecipeDetailsPage";

import { selectAllTags } from "../../store/tags/selectors";
import { getTags } from "../../store/tags/actions";
import CartButtonInRecipeCard from "../../components/CartButtonInRecipeCard";
import {
  selectCartItems,
  selectSpecificRecipeQuantity,
} from "../../store/cart/selectors";
import {
  selectSpecificRecipe,
  selectOneRecipe,
} from "../../store/recipes/selectors";
import { removeOneFromCart, addOneToCart } from "../../store/cart/actions";

export default function ShoppableRecipes() {
  const [sortSelected, setSortSelected] = useState("price");
  const [filterSelected, setFilterSelected] = useState([]);

  const dispatch = useDispatch();

  // const recipes = useSelector(selectAllRecipes());
  // console.log("recipes", recipes);

  const sortedAndFilteredRecipes = useSelector(
    selectFilteredAndSortedRecipes(sortSelected, filterSelected)
  );
  const tags = useSelector(selectAllTags());
  console.log("tags arr", tags);

  const popularRecipes = useSelector(selectPopularRecipes());
  console.log("popular recipes", popularRecipes);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTags());
    dispatch(getPopularRecipes());
  }, [dispatch]);
  // if (!recipes.length) return <p>Loading...</p>;

  //For CartButtonInRecipeCard

  // useEffect(() => {
  //   dispatch(getRecipes());
  // }, [dispatch]);

  const route_param = useParams();
  const id = parseInt(route_param.id);

  const specificRecipe = useSelector(selectOneRecipe(id));
  console.log("specific re", specificRecipe);

  const specificRecipeQuantity = useSelector(selectSpecificRecipeQuantity(id));
  const cart = useSelector(selectCartItems());
  const isInCart = cart.find((item) => {
    return item.recipe.id === id;
  });
  //console.log("is in cart:", isInCart)

  return (
    <>
      <Container style={{ backgroundColor: "#d8e3e7" }}>
        <Jumbotron
          style={{
            backgroundColor: "#d8e3e7",
            color: "#0D4D4D",
            textAlign: "center",
          }}
        >
          <h2>Shoppable Recipes</h2>
          <h4>
            Explore The Top Three Most Popular Recipes and Many Other Epic
            Recipes From EpicRes
          </h4>
        </Jumbotron>
        <Row>
          <Carousel fade>
            {popularRecipes?.map((r) => {
              return (
                <Carousel.Item key={r.id}>
                  <img className="d-block w-100" src={r.url} alt={r.title} />

                  <Carousel.Caption
                    style={{
                      color: "white",
                    }}
                    className="p-5"
                  >
                    <h3>{r.title}</h3>
                    <p>Total Price: {r.totalPrice}</p>
                    <p>Calories: {r.totalCalories}</p>
                    <p>Purchase times: {r.bought} </p>
                    {/* <Button variant='danger' onClick={() => onDelete(story.id)}>
                Delete story
              </Button> */}
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
        <br />

        <Row>
          <Col>
            <label>Sort by:</label>
            <select
              value={sortSelected}
              onChange={(e) => setSortSelected(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="time-to-cook">Time-to-cook</option>
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
          </Col>
          <Col>
            <label>Filter By Tags:</label>
            <select
              value={filterSelected}
              onChange={(e) => setFilterSelected(e.target.value)}
              // onChange={(e) =>
              //   setFilterSelected({
              //     multiValue: [...e.target.tags].map((tag) => tag.value),
              //   })
              // }
              // handleChange(evt) {
              //   this.setState({multiValue: [...evt.target.selectedOptions].map(o => o.value)});
              // }
            >
              <option>All</option>
              {tags.map((tag) => {
                return (
                  <option key={tag.title} value={tag.title}>
                    {tag.title}
                  </option>
                );
              })}
            </select>
          </Col>
        </Row>
        <Row>
          {sortedAndFilteredRecipes.map((r) => {
            console.log("r.id", r.id);
            return (
              <Col sm>
                {" "}
                <RecipeCard
                  key={r.id}
                  id={r.id}
                  title={r.title}
                  url={r.url}
                  totalPrice={r.totalPrice}
                  totalCalories={r.totalCalories}
                  bought={r.bought}
                />
                {/* <Button
                  onClick={() => {
                    console.log("click");
                  }}
                >
                  add
                </Button> */}
                {/* <div>
                  {isInCart ? (
                    <>
                      <button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          console.log("click");
                          dispatch(removeOneFromCart(specificRecipe));
                        }}
                      >
                        -
                      </button>
                      <label>{specificRecipeQuantity} In Cart</label>
                      <button
                        size="sm"
                        variant="primary"
                        onClick={() => dispatch(addOneToCart(specificRecipe))}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <>
                      <label>Add To Cart</label>
                      <button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          console.log("click");
                          dispatch(addOneToCart(specificRecipe));
                        }}
                      >
                        +
                      </button>
                    </>
                  )}
                </div> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
