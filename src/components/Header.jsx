import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img width="100" src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png" />
                    <Navbar.Text className="ps-3 text-color-greydive">Forms</Navbar.Text>
                </Navbar.Brand >
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/#">Inicio</Nav.Link>
                        <Nav.Link href="/#/answers">Respuestas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;