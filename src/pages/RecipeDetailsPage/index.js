import React, { useEffect } from "react";
import { Link } from "react-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import RecipeDetails from "../../components/RecipeDetails";
import Cart from "../Cart";
import { getRecipes } from "../../store/recipes/actions";
import { selectSpecificRecipe } from "../../store/recipes/selectors";

export default function RecipeDetailsPage() {
  const route_param = useParams();
  const recipeId = parseInt(route_param.recipeId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  const specificRecipe = useSelector(selectSpecificRecipe(recipeId));
  console.log("specific recipe", specificRecipe);

  return (
    <p>details</p>
    // <>
    //   {!specificRecipe ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <p>{specificRecipe.title}</p>
    //     // <Container>
    //     //   <Row>
    //     //     <Col>{/* <RecipeCard /> */} here go recipe card</Col>
    //     //     <Col>
    //     //       <Card>
    //     //         <Card.Title>General information</Card.Title>
    //     //         <Card.Text>
    //     //           <p>Description: {specificRecipe.description}</p>
    //     //           <p>Time-to-cook: {specificRecipe.timeToCook}</p>

    //     //           {specificRecipe.tags ? (
    //     //             <p>Tags: no tags</p>
    //     //           ) : (
    //     //             specificRecipe.tags.map((tag) => {
    //     //               return <p>Tags: {tag.title}</p>;
    //     //             })
    //     //           )}
    //     //         </Card.Text>
    //     //       </Card>
    //     //     </Col>
    //     //   </Row>
    //     //   <Row>
    //     //     <Col>
    //     //       <Card>
    //     //         <Card.Title>Ingredients</Card.Title>
    //     //         <Card.Text>
    //     //           {specificRecipe.ingredients.map((i) => {
    //     //             return (
    //     //               <ListGroup variant="flush">
    //     //                 <ListGroup.Item>{i.title}</ListGroup.Item>
    //     //               </ListGroup>
    //     //             );
    //     //           })}
    //     //         </Card.Text>
    //     //       </Card>
    //     //     </Col>

    //     //     <Col>
    //     //       <Card>
    //     //         <Card.Title>Instruction</Card.Title>
    //     //         <Card.Text>{specificRecipe.instruction}</Card.Text>
    //     //       </Card>
    //     //     </Col>
    //     //   </Row>
    //     // </Container>
    //   )}

    //   <Link to="/cart" component={Cart}>
    //     <Button>Go To Cart</Button>
    //   </Link>
    // </>
  );
}
