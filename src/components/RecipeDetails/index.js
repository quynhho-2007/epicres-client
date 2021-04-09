import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Card, Button, Container, Row, ListGroup } from "react-bootstrap";
import RecipeCard from "../RecipeCard";

export default function RecipeDetails(props) {
  return (
    <Container>
      <Row>
        <Col>
          <RecipeCard />
        </Col>
        <Col>
          <Card>
            <Card.Title>General information</Card.Title>
            <Card.Text>
              <p>Description: {props.description}</p>
              <p>Time-to-cook: {props.timeToCook}</p>

              {props.tags ? (
                <p>Tags: no tags</p>
              ) : (
                props.tags.map((tag) => {
                  return <p>Tags: {tag.title}</p>;
                })
              )}
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Title>Ingredients</Card.Title>
            <Card.Text>
              {props.ingredients.map((i) => {
                return (
                  <ListGroup variant="flush">
                    <ListGroup.Item>{i.title}</ListGroup.Item>
                  </ListGroup>
                );
              })}
            </Card.Text>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Title>Instruction</Card.Title>
            <Card.Text>{props.instruction}</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
