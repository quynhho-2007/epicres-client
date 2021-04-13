import React, { useEffect } from "react";
import { Link } from "react-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  ListGroup,
  Jumbotron,
} from "react-bootstrap";
import RecipeDetails from "../../components/RecipeDetails";
import Cart from "../Cart";
import { getSpecificRecipe } from "../../store/recipes/actions";
import { selectSpecificRecipe } from "../../store/recipes/selectors";

export default function RecipeDetailsPage() {
  const route_param = useParams();
  const id = parseInt(route_param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRecipe(id));
  }, [dispatch, id]);

  const specificRecipe = useSelector(selectSpecificRecipe(id));
  console.log("specific recipe", specificRecipe);
  console.log("id", id);
  console.log("ingredients", specificRecipe.ingredients);

  return (
    <Container style={{ backgroundColor: "#d8e3e7" }}>
      <Jumbotron
        style={{
          backgroundColor: "#d8e3e7",
          color: "#0D4D4D",
          textAlign: "center",
        }}
      >
        <h2>Recipe Details</h2>
        <h3>Check Out This Popular Recipe And Enjoy Shopping! </h3>
      </Jumbotron>{" "}
      <Row>
        <Col>
          <Card style={{ textAlign: "left", color: "white" }}>
            <Card.Img src={specificRecipe.url} />
            <Card.ImgOverlay>
              <Card.Title>{specificRecipe.title}</Card.Title>
              <Card.Text>
                <p>Total Price: {specificRecipe.totalPrice}</p>
                <p>Calories: {specificRecipe.totalCalories}</p>
                <p>Purchase times: {specificRecipe.bought} </p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        {/* {specificRecipe.ingredients?.map((i) => {
          console.log(i);
          return <p>{i.title}</p>;
        })} */}
      </Row>
      <Row>
        <Col>
          <Card style={{ textAlign: "center", backgroundColor: "#DEE1DD" }}>
            <Card.Img
              src="https://www.clariant.com/-/media/Images/Business-Units/ICS/Food-Ingredients/New/Clariant-image-food-ingredients.jpg
            "
            />
            <Card.ImgOverlay>
              <Card.Title>Tags</Card.Title>
              {specificRecipe.tags?.map((i) => {
                return <Card.Text>{i.title}</Card.Text>;
              })}
            </Card.ImgOverlay>
          </Card>
          <Card style={{ textAlign: "center" }}>
            <Card.Img src="https://previews.123rf.com/images/sauvignon/sauvignon1510/sauvignon151000068/47381940-baking-cake-ingredients-background-.jpg" />
            <Card.ImgOverlay>
              <Card.Title> Ingredients </Card.Title>
              {specificRecipe.ingredients?.map((i) => {
                return (
                  <Card.Text style={{ borderTop: "30px" }}>{i.title}</Card.Text>
                );
              })}
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card style={{ textAlign: "center", color: "black" }}>
            <Card.Img src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0dGluZyUyMGJvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" />
            <Card.ImgOverlay>
              <Card.Title>Instruction</Card.Title>
              <Card.Text>{specificRecipe.instruction}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
