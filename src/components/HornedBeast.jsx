import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function HornedBeast(props) {

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div onClick={handleClick}>
      <h2>{props.title}</h2>
      <Container>
        <Image src={props.imageUrl} alt={props.description} title={props.title} rounded fluid></Image>
        <p>{props.description}</p>
        <h3>Favorites: {"❤️"} {likes}</h3>
      </Container>
    </div>
  );
}

export default HornedBeast;