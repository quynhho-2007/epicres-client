import React from "react";
import { Carousel, Button } from "react-bootstrap";

export default function StoryCarousel(props) {
  return (
    <Carousel className="mt-5">
      <Carousel.Item key={props.id}>
        <img className="d-block w-100" src={props.url} alt={props.title} />

        <Carousel.Caption
          style={{
            backgroundColor: "blue",
            color: "gray",
          }}
          className="p-5"
        >
          <h3>{props.title}</h3>
          <p>Total Price: {props.totalPrice}</p>
          <p>Calories: {props.totalCalories}</p>
          <p>Purchase times: {props.bought} </p>
          {/* <Button variant='danger' onClick={() => onDelete(story.id)}>
                Delete story
              </Button> */}
        </Carousel.Caption>
      </Carousel.Item>
      );
    </Carousel>
  );
}
