import React from 'react';

import NavLink from './NavLink.js';

export default props => (
    <div>
        <h2>Services</h2>
        <ul>
            <li><NavLink partial={false} to="./">Service Home</NavLink></li>
            <li><NavLink to="service-1">Service 1</NavLink></li>
            <li><NavLink to="service-2">Service 2</NavLink></li>
        </ul>
        {props.children}
    </div>
)
