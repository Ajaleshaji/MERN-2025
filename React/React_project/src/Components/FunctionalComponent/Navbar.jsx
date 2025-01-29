import React from 'react';
import { Link } from 'react-router-dom'; 
import "../../css/Navbar.css"
import { useState } from 'react';

const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center",
        display:"block"
    };
    var [dropdown,showDropdown] = useState(false)
    const toggleDrop = () => {
        showDropdown(dropdown => !dropdown)
    }
    return (
        <header>
            <nav>   
                <ol >
                    <li><Link to="/Home" className='link'>Home</Link></li>
                    <li><Link to="/About" className='link'>About</Link></li>
                    <li><Link to="/Gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/Contact" className='link'>Contact</Link></li>
                    <li><Link to="/Signup" className='link'>Sign-up</Link></li>

                    <div onMouseEnter={toggleDrop} onMouseLeave={toggleDrop} className="dropdown">
                    <span className="link">Hooks</span>
                    {dropdown && (
                    <ul className="dropdown-menu" style={styling}>
                        <li><Link to='/reactlifecyclemethods'  className="link">reactlifecyclemethods</Link></li>
                        <li><Link to="/useState" className='link'>useState</Link></li>
                        <li><Link to="/useEffect" className='link'>useEffect</Link></li>
                        <li><Link to="/useEffectApi" className='link'>useEffectApi</Link></li>
                        <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                        <li><Link to="/useref" className="link">useRef</Link></li>
                        <li><Link to="/usememo" className="link">useMemo</Link></li>
                        <li><Link to="/usecallback" className="link">useCallback</Link></li>
                        <li><Link to="/usecontext" className="link">usecontext</Link></li>
                        <li><Link to="/memo" className="link">Memo</Link></li>
                        <li><Link to='/lazy' className="link">Suspense</Link></li>
                        <li><Link to="/customhooks2" className="link">UseCustomHooks2</Link></li>
                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;