import React, { useEffect } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, ListGroup, Badge, Tab, Tabs } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { getSpecificRecipe } from "../../store/recipes/actions";
import { selectSpecificRecipe } from "../../store/recipes/selectors";
import CartButtonInRecipeCard from "../../components/CartButtonInRecipeCard";

export default function RecipeDetailsPage() {
  const route_param = useParams();
  const id = parseInt(route_param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRecipe(id));
  }, [dispatch, id]);

  const specificRecipe = useSelector(selectSpecificRecipe(id));
  // console.log("specific recipe", specificRecipe);
  // console.log("id", id);
  // console.log("ingredients", specificRecipe.ingredients);
  console.log("AAAAA", specificRecipe.id);
  return (
    <Container style={{ backgroundColor: "#d8e3e7" }}>
      <Card style={{ textAlign: "left", color: "white" }}>
        <Card.Img style={{ maxHeight: "520px" }} src={specificRecipe.url} />
        <Card.ImgOverlay>
          <Card.Title>{specificRecipe.title}</Card.Title>
          <Card.Text>
            <p>Total Price: {specificRecipe.totalPrice}</p>
            <p>Calories: {specificRecipe.totalCalories}</p>
            <p>Purchase times: {specificRecipe.bought} </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <CartButtonInRecipeCard id={specificRecipe.id} />
      <br />

      <Tabs defaultActiveKey="recipe details" id="uncontrolled-tab-example">
        <Tab eventKey="tags" title="Tags">
          <Card style={{ textAlign: "center", backgroundColor: "#DEE1DD" }}>
            <Card.Img
              src="https://www.clariant.com/-/media/Images/Business-Units/ICS/Food-Ingredients/New/Clariant-image-food-ingredients.jpg
            "
            />
            <Card.ImgOverlay>
              <Card.Title>Tags</Card.Title>
              {specificRecipe.tags?.map((i) => {
                return (
                  <Badge pill variant="info">
                    {i.title}{" "}
                  </Badge>
                );
              })}
            </Card.ImgOverlay>
          </Card>
        </Tab>
        <Tab eventKey="ingredients" title="Ingredients">
          <Card style={{ textAlign: "center" }}>
            <Card.Img src="https://previews.123rf.com/images/sauvignon/sauvignon1510/sauvignon151000068/47381940-baking-cake-ingredients-background-.jpg" />
            <Card.ImgOverlay>
              <Card.Title> Ingredients </Card.Title>
              <ListGroup variant="flush">
                {specificRecipe.ingredients?.map((i) => {
                  return <ListGroup.Item>{i.title}</ListGroup.Item>;
                })}
              </ListGroup>
            </Card.ImgOverlay>
          </Card>
          <CartButtonInRecipeCard id={specificRecipe.id} />
        </Tab>
        <Tab eventKey="instruction" title="Instruction">
          <Card style={{ textAlign: "center", color: "black" }}>
            <Card.Img src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0dGluZyUyMGJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" />
            <Card.ImgOverlay>
              <Card.Title>Instruction</Card.Title>
              <Card.Text>{specificRecipe.instruction}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
}
