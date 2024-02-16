import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget.jsx";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/squary.png"
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sala</Nav.Link>
            <Nav.Link href="#link">Dormitorio</Nav.Link>
            <Nav.Link href="#link">Cocina</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
