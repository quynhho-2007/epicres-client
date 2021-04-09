import React from "react";
import { Link } from "react-dom";
import { Container, Button } from "react-bootstrap";
import RecipeDetails from "../../components/RecipeDetails";
import Cart from "../Cart";

export default function RecipeDetailsPage() {
  return (
    <Container>
      <RecipeDetails />
      <Link to="/cart" component={Cart}>
        <Button>Go To Cart</Button>
      </Link>
    </Container>
  );
}
