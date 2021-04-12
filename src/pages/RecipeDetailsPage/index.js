import React, { useEffect } from "react";
import { Link } from "react-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col, Card, ListGroup } from "react-bootstrap";
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
    <Container>
      {" "}
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
        <Col>
          <Card>
            {specificRecipe.ingredients?.map((i) => {
              return <Card> {i.title}</Card>;
            })}

            {/* <Card.Title>{i.title}</Card.Title>
            <Card.Text>
              <p>Total Price: {specificRecipe.totalPrice}</p>
              <p>Calories: {specificRecipe.totalCalories}</p>
              <p>Purchase times: {specificRecipe.bought} </p>
            </Card.Text> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
