import React from 'react';

import NavLink from './NavLink.js';

export default props => (
    <div>
        <ul>
            <li><NavLink partial={true} to="/">Home</NavLink></li>
            <li><NavLink to="dashboard">Dashboard</NavLink></li>
            <li><NavLink to="users/user-1">User 1</NavLink></li>
            <li><NavLink to="users/user-2">User 2</NavLink></li>
            <li><NavLink to="services">Services</NavLink></li>
        </ul>
        {props.children}
    </div>
);
