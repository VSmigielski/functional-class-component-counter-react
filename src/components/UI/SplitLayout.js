import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function SplitLayout(props) {
    return (
      <Container>
        <Row>
            <Col sm={12} md={6}>
                <div className="left">{props.left}</div>
            </Col>
            <Col sm={12} md={6}>
                <div className="right">{props.right}</div>
            </Col>
        </Row>
      </Container>
    );
}

export default SplitLayout