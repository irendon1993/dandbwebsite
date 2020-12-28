import React from 'react'
import Map from '../Images/dnbMap.jpg'
import { Link } from 'react-router-dom'


export function Contact() {
    return(
        <div className="contact">
            <section className="contactBanner">
                <h2>Contact Us</h2>

            </section>
            <section className="contactTop">
                <p>
                    We want to hear from you! Contact us today to see how D&B can provide
                    you with manufacturing solutions.
                </p>
            
            </section>
            <section className="contactBottom">
                <div className="contactInfo">
                    <h2>
                        Address
                    </h2>
                    <p>
                        1855 61st St, Sarasota, FL 34243
                    </p>
                    <p>
                        Phone: 941.355.8002
                        
                    </p>
                    <p>
                        Fax: 941.355.4299
                    </p>
                </div>
                <div className="map">
                    <img src={Map}></img>
                </div>
            </section>
        </div>
    );
}