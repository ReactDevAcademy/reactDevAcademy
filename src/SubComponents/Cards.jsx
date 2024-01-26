import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactLogo from "../assets/img/ReactLogo.png"
const Cards = () => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ReactLogo} />
                <Card.Body>
                    <Card.Title>React Js</Card.Title>
                    <Card.Text>
                                 React is a free and open-source front-end JavaScript library for building user interfaces based on components.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>

    )
}

export default Cards



