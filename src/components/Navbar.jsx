import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({darkMode, handleClick}) => {
    return (
        <header>
            <NavLink>Home</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>About Me</NavLink>
            <NavLink>Contact</NavLink>
        </header>
    )
}

export default Navbar;