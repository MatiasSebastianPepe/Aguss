import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../components/SideBar.css'
import Image from 'react-bootstrap/Image';

const SideBar = () => {
  return <Container className="sideBarContainer" fluid style={{ width: "5rem", height: '100%' }}>
    <Col className="d-flex flex-column  p-0 m-0 " style={{ height: '100%' }}>
      <Row className="mb-auto">
        <a className="mt-3"><Image className="logo" src="src\assets\icons\Group 7.svg" thumbnail /></a>
        <Button className="sideBarButton" variant="primary"><img src="src\assets\icons\Shape.svg" alt="Home" /></Button>
        <Button className="sideBarButton" variant="primary"><img src="src\assets\icons\Content View Gallery.svg" alt="Home" /></Button>
      </Row>
      <Row>
        <Button className="sideBarButton sideBarHome" variant="primary"><img src="src\assets\icons\Settings.svg" alt="Home" /></Button>
        <Button className="sideBarButton sideBarNote" variant="primary"><img src="src\assets\icons\Vector.svg" alt="Settings" /></Button>
      </Row>
    </Col>
  </Container>;
}

export default SideBar;