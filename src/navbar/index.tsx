import './index.scss';
import React from 'react';
import {Link} from "react-router-dom";

const NavBar = (): JSX.Element => (
    <header className="topnav">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/test">NotFound test</Link>
    </header>
);

export default NavBar;
