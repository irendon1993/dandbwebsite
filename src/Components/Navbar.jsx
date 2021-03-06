import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Navbar.scss'
import Logo from '../Images/dnbNewLogo.svg';
import IconHome from '../Icons/IconHome.svg';
import IconAbout from '../Icons/IconAbout.svg';
import IconSolutions from '../Icons/IconSolutions.svg';
import IconQuality from '../Icons/IconQuality.svg';
import IconContact from '../Icons/IconContact.svg';


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
              <div className="navbar-logo"><Link to='/'><img src={Logo}/></Link></div>
                {/* <div className="navbar-logo"><Link to="/"><p class="p1">D&B</p><p class="p2">Machine Inc</p></Link></div> */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <li>
              <div className="navItem"><img src={IconHome} /><Link to="/"><h3 onClick={this.handleClick}>Home</h3></Link></div>
            </li>
            <li>
              <div className="navItem"><img src={IconSolutions} /><Link to="/solutions"><h3 onClick={this.handleClick}>Solutions</h3></Link></div>
            </li>
            <li>
              <div className="navItem"><img src={IconQuality} /><Link to="/quality"><h3 onClick={this.handleClick}>Quality</h3></Link></div>
            </li>
            <li>
                <div className="navItem"><img src={IconAbout} /><Link to="/about"><h3 onClick={this.handleClick}>About</h3></Link></div>
              </li>
            <li>
            <div className="navItem"><img src={IconContact} /><Link to="/contact"><h3 onClick={this.handleClick}>Contact</h3></Link></div>
            </li>
                </ul>
                
            </nav>
        )
    }
}

export default Navbar