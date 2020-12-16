import React from 'react'
import DBBuilding from "../Images/ImageDBBuilding.jpg"
import IconContact from '../Icons/IconContact.svg';
import { Link } from 'react-router-dom'

export function About() {
    return(
        <div className="about">
            <section className="aboutBanner">
                <h2>About Us</h2>
            </section>
            <section className="dnbTop">
                <div className="dnbImage">
                    <img src={DBBuilding}></img>
                </div>
                <div className="dnbText">
                    <p>
                        In 1991, David and Betty Frostad established their precision machine shop,
                        D & B Machine, Inc., in Sarasota with four objectives: quality, consistency,
                        timely delivery, and competitive cost.
                    </p>
                    <p>
                        Today, from its 15,000 square-foot, climate-controlled facility on Florida's Gulf 
                        coast, D & B Machine serves Fortune 500 and international clients in commercial,
                        military, electronics, hydraulics, marine, lighting, packaging, construction, and
                        medical equipment industries.
                    </p>
                </div>
            </section>
            <section className="dnbBottom">
                <div className="dnbSummary">
                    <p>
                    We are technologically equipped to manufacture any unique machine part your business may require.
                    We are a medium to high production facility equipped with state of the art milling and turning centers
                    to handle our customers needs.
                    </p>
                    <p>
                    You will find the management team at D & B Machine, Inc. to be courteous, friendly and knowledgeable.
                    One of our able staff is always ready to listen and provide answers to your questions.
                    </p>

                    <div className="contactButton">
                    <Link to="/contact">
                        <div>
                            <div className="contactDiv">
                                <img src={IconContact} />
                                <h4>Contact Us</h4>
                            </div>
                            <h4><span>941-123-4567</span></h4>
                        </div>
                     </Link>
                     </div>
                </div>
            </section>
        </div>
    );
}