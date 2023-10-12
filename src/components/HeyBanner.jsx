import React from "react";
import '../components/HeyBanner.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'react-bootstrap/Image';

const HeyBanner = () => {
  return <Card className="heyCard col-12 m-md-3">
    <Card.Body>
      <Row className="d-flex flex-row">
        <Col>
          <Button className="menuButton" size='sm'>
            <img src="src\assets\icons\border-all.svg" alt="" />
          </Button>
        </Col>
        <Col className="dropDownContainer d-flex flex-row justify-content-end">
          <DropdownButton id="dropdown-basic-button" title="Agustin Ventures">
            <Dropdown.Item href="#/action-1">Remo Franco Hardware</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Personal Blog</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Visit Argentina 🇦🇷</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col id="imageContainer" className="d-flex flex-row-reverse">
          <Image className="profilePicture" src="src\assets\images\cv_photo_redonda.png" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col className="textContent">
          <Card.Title><h1 className="heyAgustin">Hey Agustin!</h1></Card.Title>
        </Col>
      </Row>
      <Row className="d-flex flex-row">
        <Col>
        <Card.Text>
          <h4 className="heySubtitle">Lets create something awesome today ✨💫</h4>
        </Card.Text>
        </Col>
        <Col>
        <Card.Text className="heyNotificationContainer">
          <h4 className="heyNotification">You have to send this via email before Thursday, 12 October,
2023 (12 noon - CET). . 📆 </h4>
          <h4 className="heyNotification">Try our SEO optimization tool to increase engagement by 40% 🔥</h4>
        </Card.Text>
        </Col>
      </Row>
      <Button className="heyNavButton" variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>;
}

export default HeyBanner;