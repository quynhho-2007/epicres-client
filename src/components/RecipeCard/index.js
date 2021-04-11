import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";
import RecipeDetailsPage from "../../pages/RecipeDetailsPage";

export default function RecipeCard(props) {
  return (
    // <Link to="/details" component={RecipeDetailsPage}>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p>Total Price: {props.totalPrice}</p>
          <p>Calories: {props.totalCalories}</p>
          <p>Purchase times: {props.bought} </p>
        </Card.Text>
        <Button>Here go cart button</Button>
      </Card.Body>
    </Card>
    // </Link>
  );
}
