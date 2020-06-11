import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Home from './components/Nav/Home.js';
import Dashboard from './components/Nav/Dashboard.js';
import Users from './components/Nav/Users.js';
import Services from './components/Nav/Services.js';
import ServiceHome from './components/Nav/Services/ServiceHome.js';
import Service1 from './components/Nav/Services/Service1.js';
import Service2 from './components/Nav/Services/Service2.js';

render(
    <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
        <Users path="users/:userId" />
        <Services path="services">
            <ServiceHome path="./" />
            <Service1 path="service-1" />
            <Service2 path="service-2" />
        </Services>
    </Router>, document.getElementById('navbar')
);
