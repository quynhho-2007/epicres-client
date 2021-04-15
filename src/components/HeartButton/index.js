import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { newFavorite, removeFavorite } from "../../store/user/actions";
import { selectFavorites } from "../../store/user/selectors";

export default function HeartButton(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites());
  // console.log("favorites test", favorites)
  // const product = props.data
  // console.log("product prop test", product)

  const favoriteOrNot = favorites.find((favorite) => props.id === favorite.id);

  const displayHeart = favoriteOrNot ? (
    <Button
      variant="outline-danger"
      onClick={() => {
        console.log("Remove fav");

        dispatch(removeFavorite(props.id));
      }}
    >
      ❤
    </Button>
  ) : (
    <Button
      variant="outline-danger"
      onClick={() => {
        // console.log("Add fav");
        // console.log("id fav", props.id);
        dispatch(newFavorite(props.id));
      }}
    >
      ♡
    </Button>
  );

  //   function favoriteThis(id) {
  //     dispatch(newFavorite(id));
  //   }
  //   function unFavoriteThis(id) {
  //     dispatch(removeFavorite(id));
  //   }

  return <div>{displayHeart}</div>;
}
