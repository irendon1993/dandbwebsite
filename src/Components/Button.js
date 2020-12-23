import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'
import IconContact from '../Icons/IconContact.svg';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            <Link to="/contact">
              <div className="contact">
                <div className="contactDiv">
                  <img src={IconContact} />
                  <h4><span>Contact Us</span></h4>
                </div>
                
              </div>
              </Link>
        </button>
    )
}