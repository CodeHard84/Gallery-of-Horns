import React from 'react';
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterHorns: 0
    };
  }

  handleHornChange = (event) => {
    this.setState({ filterHorns: parseInt(event.target.value) });
  }

  render() {
    const { jsonData } = this.props;
    const { filterHorns } = this.state;

    const filteredBeasts = jsonData.filter(beast => {
      if (filterHorns === 0) return true; 
      if (filterHorns === 4) return beast.horns > 3;
      return beast.horns === filterHorns;
    });
    

    const beastComponents = filteredBeasts.map(beast => (
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
        <Form style={{ marginBottom: '10px' }}>
          <Form.Group controlId="formHornsFilter">
            <Form.Label>Filter by Number of Horns:</Form.Label>
            <Form.Control as="select" onChange={this.handleHornChange}>
              <option value="0">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="4">{'>'}3 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Row className="justify-content-center g-4">
          {beastComponents}
        </Row>
      </Container>
    );
  }
}
