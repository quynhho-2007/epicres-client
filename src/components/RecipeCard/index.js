import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Card, Button } from "react-bootstrap";
import RecipeDetailsPage from "../../pages/RecipeDetailsPage";
import CartButtonInRecipeCard from "../CartButtonInRecipeCard";

export default function RecipeCard(props) {
  return (
    // <Link to="/details" component={RecipeDetailsPage}>
    <Card
      style={{ width: "28rem", color: "white", backgroundColor: "#d8e3e7" }}
    >
      <Card.Img src={props.url} />

      <Card.Body>
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
        <CartButtonInRecipeCard id={props.id} />
        {/* <Button variant="warning">Here go cart button</Button> */}
      </Card.Body>
    </Card>
    // </Link>

    // <Card className="bg-dark text-white" style={{ width: "18rem" }}>
    //   <Card.Img src={props.url} alt={props.title} />
    //   <Card.ImgOverlay>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>
    //       <p>Total Price: {props.totalPrice}</p>
    //       <p>Calories: {props.totalCalories}</p>
    //       <p>Purchase times: {props.bought} </p>
    //     </Card.Text>
    //     <Button>Here go cart button</Button>
    //   </Card.ImgOverlay>
    // </Card>
  );
}
