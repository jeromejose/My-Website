import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <ul id="ul-nav">
            <li>
                <Link className='link-styles' to="/">Home</Link>
            </li>
            <li>
                <Link className='link-styles' to="/about">About</Link>
            </li>
            <li>
                <Link className='link-styles' to="/experience">Experience</Link>
            </li>
            <li>
                <Link className='link-styles' to="/contact">Contact</Link>
            </li>
        </ul>
    );
}

export default Navbar;