import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

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