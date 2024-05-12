import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" style={{ marginBottom: '10px' }}>
                <Container>
                    <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}