import React from "react";
import '../components/NotificationNav.css'
import Container from 'react-bootstrap/Container';
import { Col } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const NotificationNav = () => {
  return <Container fluid id="notificationBar" className='p-0'>
    <Navbar className="bg-body-tertiary notificationBar p-0">
  <Container className="notificationBarDesktop p-0" id="notificationBar">
    <Col >
    <Button className="notificationButton" variant="primary"><img src="src\assets\icons\Calendar.svg" alt="calendar" /></Button>
    </Col>
    <Col>
    <Button className="notificationButton" variant="primary"><img className="bell-icon" src="src\assets\icons\Alert.svg" alt="bell" /></Button>
    </Col>
    <Col>
    <Image className="profilePictureDesktop" src="src\assets\images\cv_photo_redonda.png" thumbnail />
    </Col>
  </Container>
</Navbar>
</Container>;
}

export default NotificationNav;