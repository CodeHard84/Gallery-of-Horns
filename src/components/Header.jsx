import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
    const title = "Gallery of Horns";

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}