
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
import Container from "react-bootstrap/Container";
import React from "react";

export default class Gallery extends React.Component {
  render() {
    const { jsonData } = this.props;
    const beastComponents = jsonData.map(beast => (
      <Col key={beast._id} xs={12} sm={6} lg={4}>
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
        />
      </Col>
    ));

    return (
      <Container>
        <Row className="justify-content-center g-4">
          {beastComponents}
        </Row>
      </Container>
    );
  }
}