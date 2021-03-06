import React, {Component} from "react";

// reactstrap components
import {Button, Card, CardHeader, Col, Container, Row} from "reactstrap";
import logo from '../../assets/img/logo.svg'
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import {loginWithGoogle} from "../../components/GlobalContext";

class Login extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">

            <Container style={{paddingTop:'40vh'}}>

              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                      <img alt='logo' src={logo} style={{position: 'absolute', top: -120, height:120, left:'35%'}}/>
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in/up with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={() => loginWithGoogle()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>

                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Login;
