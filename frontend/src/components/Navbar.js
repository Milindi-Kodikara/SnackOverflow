import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import app from 'firebase';
// reactstrap components
import {
    Button,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Media,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row,
    UncontrolledCollapse,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap";
import {useSession} from "./GlobalContext";
import {useHistory} from 'react-router-dom';

function DemoNavbar() {
    const user = useSession();
    const history=useHistory();
    useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }, []);
    const [collapseClasses, setCollapseClasses] = useState('');
    const onExiting = () => {
        setCollapseClasses("collapsing-out"
        );
    };

    const onExited = () => {
        setCollapseClasses('');
    };
    return (
        <>
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-dark headroom"
                    style={{
                        backgroundColor: '#045097',
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 100,
                        border: 0
                    }}
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                            <h3 style={{
                                fontFamily: 'Dancing Script',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 700
                            }}>TuteBite</h3>
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbar_global">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            className={collapseClasses}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
                            <div className="navbar-collapse-header">
                                <Row>
                                    <Col className="collapse-brand" xs="6">
                                        <Link to="/">
                                            <h3 style={{
                                                fontFamily: 'Dancing Script',
                                                color: 'black',
                                                textTransform: 'none',
                                                fontWeight: 700
                                            }}>TuteBite</h3>
                                        </Link>
                                    </Col>
                                    <Col className="collapse-close" xs="6">
                                        <button className="navbar-toggler" id="navbar_global">
                                            <span/>
                                            <span/>
                                        </button>
                                    </Col>
                                </Row>
                            </div>

                            <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        className="nav-link-icon"
                                        href="https://github.com/Milindi-Kodikara/SnackOverflow/"
                                        id="tooltip112445449"
                                        target="_blank"
                                    >
                                        <i className="fa fa-github"/>
                                        <span className="nav-link-inner--text d-lg-none ml-2">
                                        Github
                                        </span>
                                    </NavLink>
                                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                                        Star us on Github
                                    </UncontrolledTooltip>
                                </NavItem>
                                <NavItem className="d-lg-block ml-lg-4">
                                    {user ? <div style={{display: 'flex'}}><Link to='/tutors'><NavLink><span className="nav-link-inner--text">
                                            <img src={user.photoURL} alt={'profile'} style={{height:25, marginRight: 10}}/>{user.displayName}</span>
                                    </NavLink></Link><Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            onClick={()=>{app.auth().signOut(); history.push('/')}}
                                        >

                                            <span className="nav-link-inner--text ml-1">
                                        Log Out
                                        </span>
                                        </Button></div> :<Link to='/login-page'>
                                        <Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                        >
                                        <span className="btn-inner--icon">
                                        <i className="fa fa-sign-in mr-2"/>
                                        </span>
                                            <span className="nav-link-inner--text ml-1">
                                        Login/Sign up
                                        </span>
                                        </Button></Link>}

                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}


export default DemoNavbar;
