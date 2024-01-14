// NotFound.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h1 className="display-4">404 Not Found</h1>
          <p className="lead">
            Sorry, the page you are looking for does not exist.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
