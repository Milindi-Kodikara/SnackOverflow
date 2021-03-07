import React, {useState} from "react";
import {Link} from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from "classnames";
import promo from '../../assets/img/promo.svg'
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import '../../assets/css/animation-register.css';


// core components

// index page sections
import Download from "../IndexSections/Download.js";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import SimpleFooter from "../../components/Footers/SimpleFooter";

function Landing(){
  const [nameFocused,setNameFocused] = useState(false);
  const [emailFocused,setEmailFocused] = useState(false);
  return (
      <>
        <main>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250" style={{backgroundColor: '#045097'}}>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                         <Logo style={{height: 300}}/>
                        <span style={{
                            fontFamily: 'Dancing Script',
                            fontWeight: 500, fontSize: '1em'
                        }}>Hungry for Knowledge</span>
                      </h1>
                      <p className="lead text-white">
                        Our mission is to ensure every student in Australia - no matter their background, or circumstance - can gain access to quality education.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                            className="btn-icon mb-3 mb-sm-0"
                            color="danger"
                            href='#learn-more'
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-question" />
                          </span>
                          <span className="btn-inner--text">Learn more</span>
                        </Button>
                          <Link to='/login-page'>
                        <Button
                            className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                            color="default"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-sign-in" />
                          </span>
                          <span className="btn-inner--text">
                            Sign up
                          </span>
                        </Button></Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                  <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200" id='learn-more'>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary">
                            Find tutors wherever, whenever
                          </h6>
                          <p className="description mt-3">
                            No matter where you are or what are or how busy your schedule is, our filtering system will help you find tutors
                            who fit within your schedule
                          </p>
                          <Link to='/login-page'>
                          <Button
                              className="mt-4"
                              color="primary"
                              href="#pablo"

                          >
                            Sign up
                          </Button></Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success">
                            Access to quality education
                          </h6>
                          <p className="description mt-3">
                            You cannot guarantee you receive education that helps you learn and grow as an individual. With access to our vast network
                            of tutors and our advanced filtering system, we can guarantee you find tutors who can deliver quality lessons tailored to you.
                          </p>

                          <Link to='login-page'>
                          <Button
                              className="mt-4"
                              color="success"
                          >
                            Become a tutor
                          </Button></Link>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-money" />
                          </div>
                          <h6 className="text-warning">
                            Disadvantaged? We're here for you <i className="fa fa-heart" />
                          </h6>
                          <p className="description mt-3">
                            Not everyone can gain access to quality education. Maybe they are financially disadvantaged, or live in a rural town with lackluster educational services.
                            That is why it is our mission to offer disadvantaged students access to free education, so they can access their future potential.
                          </p>
                          <Link to='/login-page'>
                          <Button
                              className="mt-4"
                              color="warning"
                          >
                           <i className={'fa fa-heart'}/> Become a volunteer
                          </Button></Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-graduation-cap" />
                    </div>
                    <h3>We want to transform how students learn online.</h3>
                    <p>We understand that keeping up with school/university has become harder, especially as we live in a new COVID-normal.
                    At TuteBite, we hope to </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                                className="badge-circle mr-3"
                                color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Fully integrated dashboard/homework tracker
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                                className="badge-circle mr-3"
                                color="success"
                            >
                              <i className="fa fa-users" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Find tutors with ease</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                                className="badge-circle mr-3"
                                color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Achieve your dreams!
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                        alt="..."
                        style={{width:400}}
                        className="img-center img-fluid"
                        src={require("assets/img/promo.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">TuteBite is built for today's technology demanding world.
                      Our filtering system means you find tutors who are truly capable of delivering you a quality education, so you don't end up choosing tutors on a whim.</p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                              className="text-success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                              className="text-warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
              >
                <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing team</h2>
                  <p className="lead text-muted">
                    Meet the team making this all possible
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>

                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-2-800x800.jpg")}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>

                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-3-800x800.jpg")}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                        style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                            className="btn-icon-only rounded-circle"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                            className="btn-icon-only rounded-circle ml-1"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">What are you waiting for?!</h2>
                  <Link to='/login-page'>
                    <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                    >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-sign-in" />
                          </span>
                      <span className="btn-inner--text">
                            Sign up
                          </span>
                    </Button></Link>
                </Col>
              </Row>

            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
              >
                <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>


        </main>
        <SimpleFooter style={{backgroundColor: 'white'}} />
      </>
  );

}

export default Landing;
