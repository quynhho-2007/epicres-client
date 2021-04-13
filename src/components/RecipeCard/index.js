import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Card, Button, Container } from "react-bootstrap";
import RecipeDetailsPage from "../../pages/RecipeDetailsPage";
import CartButtonInRecipeCard from "../CartButtonInRecipeCard";

export default function RecipeCard(props) {
  return (
    <Container>
      <Card
        style={{ width: "28rem", color: "white", backgroundColor: "#d8e3e7" }}
      >
        <Card.Body>
          <Card.Img src={props.url} />
          <Card.ImgOverlay>
            <Link to={`/recipes/${props.id}`}>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                <p>Total Price: {props.totalPrice}</p>
                <p>Calories: {props.totalCalories}</p>
                <p>Purchase times: {props.bought} </p>
              </Card.Text>
            </Link>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
      <CartButtonInRecipeCard id={props.id} />
      <br />
    </Container>
  );
}
