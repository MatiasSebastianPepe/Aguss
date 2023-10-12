import React from "react";
import '../components/ToolsArticle.css'
import Card from 'react-bootstrap/Card';
import json from '../services/Trends.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ToolsArticle = () => {
  return <Container fluid className="toolsContainer m-md-3">
    <ArticleTitle title="Most Popular Tools"></ArticleTitle>
    <ArticleSubtitle id="articleSubtitle" subtitle="Explore trending tools to create your copies fast"></ArticleSubtitle>


    <Row className="cardsContainer pt-3">
      <ArticleSubtitle subtitle="Social Media"></ArticleSubtitle>
      <CardGenerator></CardGenerator>
    </Row>
    <Row className="cardsContainer pt-3 mt-5">
      <ArticleSubtitle subtitle="Social Media"></ArticleSubtitle>
      <CardGenerator></CardGenerator>
    </Row>

  </Container>;
}

const ArticleTitle = (title) => {
  return <h1>{title.title}</h1>;
}

const ArticleSubtitle = (subtitle) => {
  return <h4>{subtitle.subtitle}</h4>;
}


const CardGenerator = () => {
  let jsonfy = json;
  return (
    <Col className="d-flex col-12 flex-wrap justify-content-center justify-items-center p-3">
      {jsonfy.map((data) => (
        <Card className="cardClass m-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Col className="d-flex justify-content-between">
            <Image className="icons" src={data.icon} thumbnail></Image>
            <Image className="icons" src={data.trend} thumbnail></Image>
            </Col>
            <Card.Title className="cardTitle pt-2">{data.title}</Card.Title>
            <Card.Text className="cardText">
              {data.text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  );
}



export default ToolsArticle;