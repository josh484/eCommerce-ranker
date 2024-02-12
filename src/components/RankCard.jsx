import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RankCard(prop) {
    return (
        <Col md={4}>
            <Card id={prop.id} className="rankCard">
                <Card.Img variant="top" src={prop.image} className="rankImage"/>
                <Card.Body className="cardBody">
                    <Card.Title className="rankText">{prop.name}</Card.Title>
                    <Card.Text className="rankText">
                        £{prop.price}
                    </Card.Text>
                    <Button variant="primary" href={prop.link}>{prop.website}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RankCard