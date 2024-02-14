import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function RankCard(prop) {
    return (
        <Col md={4} sm={12} className="d-flex justify-content-center">
            <Card id={prop.id} className={prop.website === 'Amazon' ? 'Amazon rankCard' : 'Ebay rankCard' }>
                <Card.Img variant="top" src={prop.image} className="rankImage"/>
                <Card.Body className="cardBody">
                    <Card.Title className="rankText">{prop.name}</Card.Title>
                    <Card.Text className="rankText">
                        £{prop.price}
                    </Card.Text>
                    <Button variant="primary" href={prop.link} className="rankButton">{prop.website}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default RankCard