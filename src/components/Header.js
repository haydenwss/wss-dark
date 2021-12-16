import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
   
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav>
                <div className="navbar-container">
       
                        <Link to="/"  onClick={closeMobileMenu}>
                            <img data-aos="fade-in" className='just-navbar-logo' src='/images/white-transparent.png' alt='avatar' />
                        </Link>
                    
                    <div data-aos="fade-in" className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link data-aos="fade-in" to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link data-aos="fade-in" to="/process" className="nav-links" onClick={closeMobileMenu}>
                                Process
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link data-aos="fade-in" to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                 
                    </ul>
                   
                </div>
            </nav>   
        </>
    )
}

export default Header;