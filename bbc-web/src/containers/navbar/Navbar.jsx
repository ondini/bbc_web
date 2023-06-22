import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './Navbar.css'
import logo from '../../assets/BBC_logo.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar_wrapper">
            <div className="navbar container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>

                <nav className="navbar-links_container">
                    <p><a href="#home">Úvod</a></p>
                    <p><a href="#whybbc">Proč BBC?</a></p>
                    <p><a href="#services">Služby</a></p>
                    <p><a href="#profits">Zisky</a></p>
                    <p><a href="#about">O nás</a></p>
                </nav>

                <div className="navbar-contact_container">
                    <a href="#contact"> Kontaktujte nás </a>
                </div>
                <div  className="navbar-lang_container">
                    <p><a className= "active-lang" href="https://blackbull-capital.com">CS</a></p> <p>|</p><p> <a href="https://en.blackbull-capital.com">EN</a></p>
                </div>
                <div className="navbar-burger">
                    {toggleMenu 
                        ? <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)}/>
                        : <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)}/>
                    }
                </div>
            </div>
            {toggleMenu && (
                <div className="navbar-menu_container scale-up-center">
                    <div className="navbar-menu_container-links">
                        <p><a href="#home" onClick={() => setToggleMenu(false)}>Úvod</a></p>
                        <p><a href="#whybbc" onClick={() => setToggleMenu(false)}>Proč BBC?</a></p>
                        <p><a href="#services" onClick={() => setToggleMenu(false)}>Služby</a></p>
                        <p><a href="#about" onClick={() => setToggleMenu(false)}>O nás</a></p>
                    </div> 
                    <div className="navbar-menu_contact-container">
                        <a href="#contact" onClick={() => setToggleMenu(false)}>Kontaktujte nás</a>
                    </div>
                    <div  className="navbar-menu_lang_container">
                        <p><a className= "active-lang" href="https://blackbull-capital.com">CS</a></p> <p>|</p><p> <a href="https://en.blackbull-capital.com">EN</a></p>
                    </div>
            </div>
            )}
                
        </div>
    )
}

export default Navbar
