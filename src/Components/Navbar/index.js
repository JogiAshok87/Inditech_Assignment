import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <FontAwesomeIcon style={{color:'#fff',fontSize:30,}} icon={faTimes} /> : <FontAwesomeIcon style={{color:'#fff',fontSize:30}} icon={faBars} />}
            </div>

            <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
                <li><NavLink exact to="/" className="navbar-link" onClick={toggleNavbar}>HOME</NavLink></li>
                <li><NavLink to="/Multiplayer" className="navbar-link" onClick={toggleNavbar}>MULTIPLAYER</NavLink></li>
                <li><NavLink to="/Campaign" className="navbar-link" onClick={toggleNavbar}>CAMPAIGN</NavLink></li>
                <li><NavLink to="/Soldier" className="navbar-link" onClick={toggleNavbar}>SOLDIER</NavLink></li>
                <li><NavLink to="/Store" className="navbar-link" onClick={toggleNavbar}>STORE</NavLink></li>
                <li><NavLink to="/More" className="navbar-link" onClick={toggleNavbar}>MORE</NavLink></li>
            </ul>

            <img src="https://res.cloudinary.com/dhtdkkae1/image/upload/v1712390065/header-img_tgoumz.png" alt="" className='header-img'/>
        </nav>
    );
}

export default Navbar;
