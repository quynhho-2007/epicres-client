import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";

import { Container, Jumbotron, Col, Row, Carousel } from "react-bootstrap";
import { getPopularRecipes, getRecipes } from "../../store/recipes/actions";
import {
  selectFilteredAndSortedRecipes,
  selectPopularRecipes,
} from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";

import { selectAllTags } from "../../store/tags/selectors";
import { getTags } from "../../store/tags/actions";

import {
  selectCartItems,
  selectSpecificRecipeQuantity,
} from "../../store/cart/selectors";
import { selectOneRecipe } from "../../store/recipes/selectors";

export default function ShoppableRecipes() {
  const [sortSelected, setSortSelected] = useState("price");
  const [filterSelected, setFilterSelected] = useState([]);

  const dispatch = useDispatch();

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

  const route_param = useParams();
  const id = parseInt(route_param.id);

  const specificRecipe = useSelector(selectOneRecipe(id));
  console.log("specific re", specificRecipe);

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
          <h5>
            Explore The Top Three Most Popular Recipes and Many Other Epic
            Recipes From EpicRes
          </h5>
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
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
