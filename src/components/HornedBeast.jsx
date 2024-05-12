import Image from "react-bootstrap/Image";
import { useState } from "react";

export default function HornedBeast(props) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <span onClick={handleClick}>
      <h2>{props.title}</h2>
      <Image src={props.imageUrl} alt={props.description} title={props.title} rounded fluid></Image>
      <p>{props.description}</p>
      <h3>Favorites: {"❤️"} = {likes}</h3>
    </span>
  );
}
