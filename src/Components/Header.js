import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logos/DBdesktopCopy.jpg';
import IconHome from '../Icons/IconHome.svg';
import IconAbout from '../Icons/IconAbout.svg';
import IconSolutions from '../Icons/IconSolutions.svg';
import IconQuality from '../Icons/IconQuality.svg';
import IconContact from '../Icons/IconContact.svg';

export function Header() {
  return (
      <div className="header">
        <nav>
          <ul>
            <li>
              <img src={Logo} height="100 px" />
            </li>
            <li>
              <div className="navItem"><img src={IconHome} /><h3>Home</h3></div>
            </li>
            <li>
              <div className="navItem"><img src={IconAbout} /><h3>About</h3></div>
            </li>
            <li>
              <div className="navItem"><img src={IconSolutions} /><h3>Solutions</h3></div>
            </li>
            <li>
              <div className="navItem"><img src={IconQuality} /><h3>Quality</h3></div>

            </li>
            <li className="contact">
              <div>
                <div className="contactDiv">
                  <img src={IconContact} />
                  <h4>Contact Us</h4>
                </div>
                <h4>941-123-4567</h4>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    
  );
}
