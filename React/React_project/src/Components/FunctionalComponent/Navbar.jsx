import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../CSS/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    var [dropdown,showDropdown] = useState(false)
    const toggleDrop = () => {
        showDropdown(dropdown = !dropdown)
    }
    return (
        <header>
            <nav>   
                <ol style={styling}>
                    <li><Link to="/Home" className='link'>Home</Link></li>
                    <li><Link to="/About" className='link'>About</Link></li>
                    <li><Link to="/Gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/Contact" className='link'>Contact</Link></li>
                    <li><Link to="/Signup" className='link'>Sign-up</Link></li>
                    <div>
                    <span onMouseEnter={toggleDrop} >Hooks</span>
                    {dropdown && (
                    <ul onMouseLeave={toggleDrop}>
                        <li><Link to="/useState" target='_blank'>useState</Link></li>
                        <li><Link to="/useEffect" target='_blank'>useEffect</Link></li>
                        <li><Link to="/useEffectApi" target='_blank'>useEffectApi</Link></li>
                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;