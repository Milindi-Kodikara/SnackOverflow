/*eslint-disable*/
import React from "react";
// reactstrap components
import {Button, Col, Container, Row, UncontrolledTooltip} from "reactstrap";

function SimpleFooter(props) {
  return (
      <>
        <footer className="footer" {...props}>
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2" style={{fontFamily: '"Dancing Script"'}}>
                  TuteBite: Hungry for knowledge
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Our mission is to help every child get a quality education, no matter the circumstance.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">

                <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="github"
                    href="https://github.com/Milindi-Kodikara/SnackOverflow"
                    id="tooltip495507257"
                    target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github"/>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr/>
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                      target="_blank"
                  >
                    TuteBite
                  </a>
                  .
                </div>
              </Col>

            </Row>
          </Container>
        </footer>
      </>
  );
}

export default SimpleFooter;
