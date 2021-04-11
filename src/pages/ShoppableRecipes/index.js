import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import {
  Container,
  Button,
  Jumbotron,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { getRecipes } from "../../store/recipes/actions";
import {
  selectAllRecipes,
  selectFilteredAndSortedRecipes,
} from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";
import { selectAllTags } from "../../store/tags/selectors";
import { getTags } from "../../store/tags/actions";

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

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTags());
  }, [dispatch]);
  // if (!recipes.length) return <p>Loading...</p>;
  return (
    <>
      <Jumbotron>
        <h1>Shoppable Recipes</h1>
      </Jumbotron>
      <Container>
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
              {tags.map((tag) => {
                return (
                  <option key={tag.title} value={tag.title}>
                    {tag.title}
                  </option>
                );
              })}
            </select>
          </Col>

          {/* <DropdownButton
            alignRight
            title="Sort By"
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="option-1">Title</Dropdown.Item>
            <Dropdown.Item eventKey="option-2">Time-to-cook</Dropdown.Item>
            <Dropdown.Item eventKey="option-3">Popularity</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="some link">Price</Dropdown.Item>
          </DropdownButton> */}
        </Row>
        <Row>
          {sortedAndFilteredRecipes.map((r) => {
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
