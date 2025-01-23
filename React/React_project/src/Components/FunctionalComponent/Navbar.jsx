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
                    <span onMouseEnter={toggleDrop} className="link">Hooks</span>
                    {dropdown && (
                    <ul onMouseLeave={toggleDrop}>
                        <li><Link to="/useState" className='link'>useState</Link></li>
                        <li><Link to="/useEffect" className='link'>useEffect</Link></li>
                        <li><Link to="/useEffectApi" className='link'>useEffectApi</Link></li>
                        <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                        <li><Link to="/useref" className="link">useRef</Link></li>
                        <li><Link to="/usememo" className="link">useMemo</Link></li>
                        <li><Link to="/usecallback" className="link">useCallback</Link></li>
                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;