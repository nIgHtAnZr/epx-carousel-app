import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SlidesError = () => {
  return (
    <div className="col-md-12">
      <Row className="justify-content-md-center">
        <Col md="auto">
          Invalid Slide Count
        </Col>
      </Row>
    </div>
  );
}

export default SlidesError;
