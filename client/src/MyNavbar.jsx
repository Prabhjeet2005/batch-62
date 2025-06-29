import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useSearchParams } from 'react-router-dom';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtils';
import { useIsLoggedIn } from './useIsLoggedIn';
const MyNavBar = () => {
  const isUserLoggedIn = useIsLoggedIn();
  const [, setSearchParams] = useSearchParams();
  const { makeRequest: logout } = useApi(ENDPOINTS.USER.LOGOUT)
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="flex">
              Flexbox
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {isUserLoggedIn ? <Nav.Link onClick={logout}>Logout</Nav.Link> :
              <>
                <Nav.Link as={Link} to="login">Login</Nav.Link>
                <Nav.Link as={Link} to="signup">Signup</Nav.Link>
              </>}

          </Nav>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={e => setSearchParams({ search: e.target.value })}
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" variant='outline-primary'>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;