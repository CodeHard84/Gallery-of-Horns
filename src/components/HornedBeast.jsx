import Image from "react-bootstrap/Image";
import { useState } from "react";

export default function HornedBeast(props) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    // Probably going to popup the modal here.
  }

  return (
    <div onClick={handleClick}>
      <h2>{props.title}</h2>
      <Image src={props.imageUrl} alt={props.description} title={props.title} rounded fluid></Image>
      <p>{props.description}</p>
      <h3>Favorites: {"❤️"} = {likes}</h3>
    </div>
  );
}
