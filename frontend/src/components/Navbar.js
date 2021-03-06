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

function DemoNavbar() {
    const user = useSession();
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
                            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav>
                                        <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                        <span className="nav-link-inner--text">Components</span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-xl">
                                        <div className="dropdown-menu-inner">
                                            <Media
                                                className="d-flex align-items-center"
                                                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                                                target="_blank"
                                            >
                                                <div
                                                    className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                    <i className="ni ni-spaceship"/>
                                                </div>
                                                <Media body className="ml-3">
                                                    <h6 className="heading text-primary mb-md-1">
                                                        Getting started
                                                    </h6>
                                                    <p className="description d-none d-md-inline-block mb-0">
                                                        Learn how to use Argon compiling Scss, change
                                                        brand colors and more.
                                                    </p>
                                                </Media>
                                            </Media>
                                            <Media
                                                className="d-flex align-items-center"
                                                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                                                target="_blank"
                                            >
                                                <div
                                                    className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                    <i className="ni ni-palette"/>
                                                </div>
                                                <Media body className="ml-3">
                                                    <h6 className="heading text-primary mb-md-1">
                                                        Foundation
                                                    </h6>
                                                    <p className="description d-none d-md-inline-block mb-0">
                                                        Learn more about colors, typography, icons and the
                                                        grid system we used for Argon.
                                                    </p>
                                                </Media>
                                            </Media>
                                            <Media
                                                className="d-flex align-items-center"
                                                href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                                                target="_blank"
                                            >
                                                <div
                                                    className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                    <i className="ni ni-ui-04"/>
                                                </div>
                                                <Media body className="ml-3">
                                                    <h5 className="heading text-warning mb-md-1">
                                                        Components
                                                    </h5>
                                                    <p className="description d-none d-md-inline-block mb-0">
                                                        Browse our 50 beautiful handcrafted components
                                                        offered in the Free version.
                                                    </p>
                                                </Media>
                                            </Media>
                                        </div>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle nav>
                                        <i className="ni ni-collection d-lg-none mr-1"/>
                                        <span className="nav-link-inner--text">Examples</span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem to="/landing-page" tag={Link}>
                                            Landing
                                        </DropdownItem>
                                        <DropdownItem to="/profile-page" tag={Link}>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem to="/login-page" tag={Link}>
                                            Login
                                        </DropdownItem>
                                        <DropdownItem to="/register-page" tag={Link}>
                                            Register
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
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
                                    {user ? <div style={{display: 'flex'}}><NavLink><span className="nav-link-inner--text">
                                            <img src={user.photoURL} alt={'profile'} style={{height:25, marginRight: 10}}/>{user.displayName}</span>
                                    </NavLink><Button
                                            className="btn-neutral btn-icon"
                                            color="default"
                                            onClick={()=>{app.auth().signOut()}}
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