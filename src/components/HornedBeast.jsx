import Image from "react-bootstrap/Image";
import { useState } from "react";
import React from "react";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./SelectedBeast";

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    this.props.onBeastSelection();
    this.setState(prevState => ({
      likes: prevState.likes + 1,
    }));
  }

  render() {
    return (
      <Card
        style={{ cursor: "pointer" }}
        onClick={this.handleClick}
        bg="light"
        border="secondary"
        className="h-100"
      >
        <Card.Img
          src={this.props.imageUrl}
          alt={this.props.description}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          Favorites: ❤️ = {this.state.likes}
        </Card.Footer>
      </Card>
    );
  }
}