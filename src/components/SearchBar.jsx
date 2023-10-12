import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";
import '../components/HeyBanner.css'


const SearchBar = () => {
  return <Col className="d-flex navBarContainer justify-content-center">
  <Form className=" col-9">
  
  <Form.Control
    type="search"
    placeholder="Search"
    className=""
    aria-label="Search"
    style={{height:"3rem"}}
  />
  
  </Form>
  </Col>;
}


export default SearchBar;