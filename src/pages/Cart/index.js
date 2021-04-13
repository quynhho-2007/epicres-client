import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalCartPrice,
} from "../../store/cart/selectors";
import {
  ListGroup,
  Button,
  Table,
  Jumbotron,
  Container,
} from "react-bootstrap";
import CartButtonInRecipeCard from "../../components/CartButtonInRecipeCard";

import { emptyCart } from "../../store/cart/actions";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems());
  console.log("cart items", cartItems);
  const totalCartPrice = useSelector(selectTotalCartPrice());
  return (
    <Container>
      {cartItems.length ? (
        <div>
          <Jumbotron
            style={{
              backgroundColor: "#d8e3e7",
              color: "#0D4D4D",
              textAlign: "center",
            }}
          >
            <h1>Your Shopping Cart</h1>
          </Jumbotron>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>

                <th>Details</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>

                  <td>
                    <Link to={`/recipes/${item.recipe.id}`}>
                      {item.recipe.title}
                    </Link>
                    <p> {`${item.quantity} x €${item.recipe.totalPrice}`}</p>
                  </td>
                  <td>
                    {" "}
                    <CartButtonInRecipeCard id={item.recipe.id} />
                  </td>
                  <td>
                    €
                    {Math.round(item.quantity * item.recipe.totalPrice * 100) /
                      100}
                  </td>

                  {/* <ListGroup.Item id={index}>
                  {index + 1}. {item.recipe.title}
                  <p> {`${item.quantity} x €${item.recipe.totalPrice}`}</p>
                  <CartButtonInRecipeCard id={item.recipe.id} />
                </ListGroup.Item> */}
                </tr>
              ))}

              <tr>
                <td>
                  <strong>Total:</strong>
                </td>
                <td> </td>
                <td> </td>
                <td>
                  <strong>€{Math.round(totalCartPrice * 100) / 100}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button variant="info" onClick={() => dispatch(emptyCart())}>
            Empty Cart
          </Button>{" "}
          <Link to="/">
            {" "}
            <Button variant="info">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <Jumbotron
          style={{
            backgroundColor: "#d8e3e7",
            color: "#0D4D4D",
            textAlign: "center",
          }}
        >
          <h2>Nothing In Your Shopping Cart Yet :( </h2>
        </Jumbotron>
      )}
    </Container>
  );
}
