import React, { useState } from 'react';
// import '../App.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Close the menu after clicking a menu item
  const handleMenuItemClick = () => {
    setMenuOpen(false);  // Close menu after item click
  };

  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a
            className={`menu-toggle ${menuOpen ? 'is-clicked' : ''}`}
            href="#"
            onClick={toggleMenu}
          >
            <span></span>
          </a>

          <div className="logo">
            <a href="index.html">KARDS</a>
          </div>

          <nav id="main-nav-wrap" className={menuOpen ? 'open' : ''}>
            <ul className="main-navigation">
              <li className="current">
                <a 
                  className="smoothscroll" 
                  href="#intro" 
                  title="Home"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  className="smoothscroll" 
                  href="#about" 
                  title="About"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className="smoothscroll" 
                  href="#resume" 
                  title="Resume"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  className="smoothscroll" 
                  href="#portfolio" 
                  title="Portfolio"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  className="smoothscroll" 
                  href="#services" 
                  title="Services"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  className="smoothscroll" 
                  href="#contact" 
                  title="Contact"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="styles.html" 
                  title="Style Demo"
                  onClick={handleMenuItemClick} // Close menu on click
                >
                  Style Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
