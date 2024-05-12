
// The data is shaped like this:
// {
//   "_id": 1,
//   "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//   "title": "UniWhal",
//   "description": "A unicorn and a narwhal nuzzling their horns",
//   "keyword": "narwhal",
//   "horns": 1
// },

import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default function Gallery(props) {

    const hornedBeasts = props.jsonData;
    const beastComponents = hornedBeasts.map(beast => (
      // Study more on the React grid.
      <Col key={beast._id} xs={4} sm={4} md={4}>
        <HornedBeast 
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      </Col>
    ));

    return (
      <Container>
      <Row className="justify-content-center">
        {beastComponents}
      </Row>
      </Container>
    );
}