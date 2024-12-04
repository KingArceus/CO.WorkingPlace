import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  src="assets/img/index-background.jpg"
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  src="assets/img/hero-image-3.png"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
