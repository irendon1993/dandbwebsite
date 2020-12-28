import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logos/DBdesktopCopy.jpg';
import IconHome from '../Icons/IconHome.svg';
import IconAbout from '../Icons/IconAbout.svg';
import IconSolutions from '../Icons/IconSolutions.svg';
import IconQuality from '../Icons/IconQuality.svg';
import IconContact from '../Icons/IconContact.svg';
import IconHamburger from '../Icons/IconHamburger.svg';

export function Header() {
  return (
      <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">
              <img src={Logo} height="100 px" />
              </Link>
            </li>
            <li>
              <div className="navItem"><img src={IconHome} /><Link to="/"><h3>Home</h3></Link></div>
            </li>
            
              <li>
                <div className="navItem"><img src={IconAbout} /><Link to="/about"><h3>About</h3></Link></div>
              </li>
            
            
            <li>
              <div className="navItem"><img src={IconSolutions} /><Link to="/solutions"><h3>Solutions</h3></Link></div>
            </li>
            <li>
              <div className="navItem"><img src={IconQuality} /><Link to="/quality"><h3>Quality</h3></Link></div>
            
            </li>
            <li>
              <div className="hamburger"><img src={IconHamburger}/></div>
            </li>
            <li className="contact">
              
            </li>
          </ul>
        </nav>
      </div>
    
  );
}
