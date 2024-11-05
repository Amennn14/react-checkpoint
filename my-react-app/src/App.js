import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import products from './product';

const firstName = "Amen"; 

const App = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <h2>{firstName ? `Hello, ${firstName}!` : 'Hello, there!'}</h2>
        {firstName && <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg" alt="BMW logo" />}
      </div>
    </Container>
  );
};

export default App;
