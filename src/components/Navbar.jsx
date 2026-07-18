import { useState } from "react";

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <a href="#home" className="navbar-logo">
                    The <span>Cut Room</span>
                </a>

                {/*The Desktop Links */}
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#hours">Hours</a></li>
                    <li><a href="#barbers">Barbers</a></li>
                </ul>

                {/*Book Now Button - On desktops */}
                <a href="https://booksy.com/en-us#ba_s=seo" target="_blank" className="navbar-book-btn">Book Now</a>

                {/*Hamburger - Mobile only */}
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {/*Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
                    <a href="#hours" onClick={() => setMenuOpen(false)}>Hours</a>
                    <a href="#barbers" onClick={() => setMenuOpen(false)}>Barbers</a>
                    <a href="https://booksy.com/en-us#ba_s=seo" target="_blank" className="mobile-book-btn" onClick={() => setMenuOpen(false)}>Book Now</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar