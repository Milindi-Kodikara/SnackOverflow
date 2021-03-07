import React, {useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
// core components
import {useSession} from "../../components/GlobalContext";
import {Redirect, useHistory} from "react-router";
import SimpleFooter from "../../components/Footers/SimpleFooter";
import {ReactComponent as RegisterImg} from '../../assets/img/register.svg';
import '../../assets/css/animation-register.css';
import app from "firebase";

const PHONE_REGEX = /^(?:\+?(61))+ ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/g
export default function AddPhone() {
    const user = useSession();
    const history = useHistory();
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <>
            {user?.phoneNumber && <Redirect to='/tutors'/>}
            <main>
                <section className="section section-shaped section-lg">
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                            <RegisterImg/>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0" style={{marginTop: 50}}>
                                    <CardHeader className="bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <h4>Add your phone number</h4>
                                            <span>With your phone number we can send you text confirmations for your next classes!</span>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-1">

                                        <Form role="form">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fa fa-phone"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Phone Number" type="text" value={phoneNumber}
                                                           onChange={e => setPhoneNumber(e.target.value)}/>
                                                </InputGroup>
                                            </FormGroup>


                                            <Row className="my-4">
                                                <Col xs="12">
                                                    <div
                                                        className="custom-control custom-control-alternative custom-checkbox">
                                                        <input
                                                            className="custom-control-input"
                                                            id="customCheckRegister"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheckRegister"
                                                        >
                                <span>
                                  I agree with the{" "}
                                    <a
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                    Privacy Policy
                                  </a>
                                </span>
                                                        </label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4 mb-3"
                                                    color="danger"
                                                    type="button"
                                                    onClick={() => {
                                                        if (!PHONE_REGEX.test(phoneNumber)) {
                                                            window.alert('The phone number you gave is invalid! Make sure to type in the format: +61412345678')
                                                            return;
                                                        }
                                                        app.database().ref(`students/${user.uid}`).child('phoneNumber').set([' ', '-', '(', ')'].reduce(
                                                            (phoneNumber, char) => {
                                                                return phoneNumber.replace(char, '')
                                                            }, phoneNumber
                                                        )).then(() => window.alert("Success! We'll send you a text shortly confirming your signup to TuteBite!"));

                                                        history.push('/tutors');

                                                    }}
                                                >
                                                    Next
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
            <SimpleFooter/>
        </>
    );

}

