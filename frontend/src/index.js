/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/main/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import {GlobalContextProvider} from "./components/GlobalContext";
import TutorSearch from "./views/main/TutorSearch";
import DemoNavbar from "./components/Navbar";
import AddPhone from "./views/main/AddPhone";

ReactDOM.render(
  <BrowserRouter>
    <GlobalContextProvider>
        <DemoNavbar/>
    <Switch>
      <Route path="/examples" exact render={props => <Index {...props} />} />
      <Route
        path="/"
        exact
        component={Landing}
      />
      <Route path="/login-page" exact component={Login} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route path='/tutors' component={TutorSearch} />
      <Route path='/add-phone' component={AddPhone}/>
      <Redirect to="/" />
    </Switch>
    </GlobalContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
