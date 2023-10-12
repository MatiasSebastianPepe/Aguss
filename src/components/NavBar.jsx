import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Col } from "react-bootstrap";
import '../components/NavBar.css'
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return <Container fluid id="navBar" className='p-0 ms-3'>
    <Navbar className="bg-body-tertiary navBar p-0">
      <Container id="navBar" className='d-flex'>
        <Col className="navBarDesktop">
          <Form className="col-11">

            <Form.Control
              type="search"
              placeholder="🔍 Search"
              className="me-2"
              aria-label="Search"
              style={{ height: "3rem" }}
            />

          </Form>
        </Col>
        <Col>
        <Button className="navButtonContent" variant="primary">Create content</Button>
        </Col>
        <Col>
        <Button className="navButtonCoin" variant="primary"><img className='animated bounce' src="src\assets\icons\akar-icons_coin.svg" alt="coin" /> 20</Button>
        </Col>
        
      </Container>
    </Navbar>
  </Container>;
}


export default NavBar;