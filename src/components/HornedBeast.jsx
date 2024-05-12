import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function HornedBeast(props) {
  return (
      <div>
        <h2>{props.title}</h2>
        <Container>
        <Image src={props.imageUrl} alt={props.description} title={props.title} rounded fluid></Image>
        <p>{props.description}</p>
        </Container>
      </div>
  );
}

export default HornedBeast;