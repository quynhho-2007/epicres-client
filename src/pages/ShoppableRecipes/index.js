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
  Carousel,
} from "react-bootstrap";
import { getPopularRecipes, getRecipes } from "../../store/recipes/actions";
import {
  selectAllRecipes,
  selectFilteredAndSortedRecipes,
  selectPopularRecipes,
} from "../../store/recipes/selectors";
import RecipeCard from "../../components/RecipeCard";
import RecipeCarousel from "../../components/RecipeCarousel";
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
  console.log("tags arr", tags);

  const popularRecipes = useSelector(selectPopularRecipes());
  console.log("popular recipes", popularRecipes);

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getTags());
    dispatch(getPopularRecipes());
  }, [dispatch]);
  // if (!recipes.length) return <p>Loading...</p>;
  return (
    <>
      <Jumbotron>
        <h1>Shoppable Recipes</h1>
      </Jumbotron>
      <Container>
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
