import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Row, Container, Button, Col, Jumbotron } from "react-bootstrap";

import { selectUser } from "../../store/user/selectors";
import UsersFavorites from "../../components/UsersFavorites";

export default function MyProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  console.log("user test", user);

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Container style={{ backgroundColor: "#d8e3e7" }}>
        <Jumbotron
          style={{
            backgroundColor: "#d8e3e7",
            color: "#0D4D4D",
            textAlign: "center",
          }}
        >
          <h2>Your Profile Page</h2>
        </Jumbotron>
        <Row>
          <Col>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
              <h4>User's Details:</h4>
              <Form.Group controlId="formBasicFirstName">
                <Form.Control
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  type="input"
                  placeholder={user.firstName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Control
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  type="input"
                  placeholder={user.lastName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder={user.email}
                />
              </Form.Group>
              {/* <Form.Group controlId="formBasicPassword">
                <Form.Control
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  placeholder="Your current password"
                />
              </Form.Group> */}

              <Form.Group>
                <Button variant="outline-info" type="submit" onClick={onSubmit}>
                  Make Adjustments!
                </Button>
              </Form.Group>
            </Form>
          </Col>
          {/* <Col>
            <h1
              style={{
                fontFamily: "Allura",
                fontWeight: "bold",
              }}
            >
              Order Details:
            </h1>
            <UserOrders data={user}/>
          </Col> */}
        </Row>
      </Container>
      <br />
      <Container style={{ backgroundColor: "#d8e3e7" }}>
        <UsersFavorites data={user} />{" "}
      </Container>
    </div>
  );
}
