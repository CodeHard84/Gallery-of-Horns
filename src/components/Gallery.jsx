import React from 'react';
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Gallery extends React.Component {

render() {
  const { jsonData } = this.props;
  const beastComponents = jsonData.map(beast => (
    <Col key={beast._id} xs={12} sm={6} lg={4}>
      <HornedBeast
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        onBeastSelection={() => this.props.onBeastSelection(beast)}
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
