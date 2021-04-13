import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

import CartButtonInRecipeCard from "../CartButtonInRecipeCard";

export default function RecipeCard(props) {
  return (
    <Container>
      <Card
        style={{ width: "28rem", color: "white", backgroundColor: "#d8e3e7" }}
      >
        <Card.Body>
          <Card.Img
            style={{ width: "100%", maxHeight: "260px" }}
            src={props.url}
          />
          <Card.ImgOverlay>
            <Link style={{ color: "white" }} to={`/recipes/${props.id}`}>
              <Card.Title>{props.title}</Card.Title>
            </Link>
            <Card.Text>
              <p>Total Price: {props.totalPrice}</p>
              <p>Calories: {props.totalCalories}</p>
              <p>Purchase times: {props.bought} </p>
            </Card.Text>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
      <CartButtonInRecipeCard id={props.id} />
      <br />
    </Container>
  );
}
