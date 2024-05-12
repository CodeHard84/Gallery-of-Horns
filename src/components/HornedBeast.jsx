import Image from "react-bootstrap/Image";
import { useState } from "react";
import React from "react";

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  }

  render() {
    return (
      <span onClick={this.handleClick}>
        <h2>{this.props.title}</h2>
        <Image src={this.props.imageUrl} alt={this.props.description} title={this.props.title} rounded fluid />
        <p>{this.props.description}</p>
        <h3>Favorites: {"❤️"} = {this.state.likes}</h3>
      </span>
    );
  }
}