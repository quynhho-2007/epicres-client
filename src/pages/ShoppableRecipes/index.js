import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { Container, Button, Jumbotron, Col, Row } from "react-bootstrap";
import { getRecipes } from "../../store/recipes/actions";
import { selectAllRecipes } from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";

export default function ShoppableRecipes() {
  const dispatch = useDispatch();

  const recipes = useSelector(selectAllRecipes());
  console.log("recipes", recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  // if (!recipes.length) return <p>Loading...</p>;
  return (
    <>
      <Jumbotron>
        <h1>Shoppable Recipes</h1>
      </Jumbotron>
      <Container>
        <Row>
          {recipes.map((r) => {
            return (
              <Col sm>
                <RecipeCard
                  key={r.id}
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
