import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router";

import { getFavorites } from "../../store/user/actions";
import { selectFavorites } from "../../store/user/selectors";

export default function UsersFavorites() {
  const dispatch = useDispatch();
  const history = useHistory();
  const favorites = useSelector(selectFavorites());
  console.log("favorites HERE", favorites);

  const displayFavorites =
    favorites?.length >= 1 ? (
      favorites?.map((favorite) => {
        return (
          <Col key={favorite.id}>
            <Image
              roundedCircle
              src={favorite.url}
              alt={favorite.title}
              style={{
                width: 171,
                height: 180,
              }}
              onClick={() => history.push(`/recipes/${favorite.id}`)}
            />
          </Col>
        );
      })
    ) : (
      <p>Loading....</p>
    );

  useEffect(() => {
    if (favorites.length === 0) {
      dispatch(getFavorites());
    }
  }, [dispatch, favorites.length, favorites.id]);

  return (
    <div>
      <Container fluid>
        <div>
          <Row>
            <h1
              style={{
                fontFamily: "Allura",
                fontWeight: "bold",
              }}
            >
              User Favorites:
            </h1>
          </Row>
          <Row>
            <p
              style={{
                color: "white",
              }}
            >
              (Click an image to see further details)
            </p>
          </Row>
          <Row>{displayFavorites}</Row>
        </div>
      </Container>
    </div>
  );
}
