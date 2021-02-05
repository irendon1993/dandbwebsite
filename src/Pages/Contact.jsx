import React, {useEffect, useState} from 'react';
import Map from '../Images/dnbMap.jpg'
import { Link } from 'react-router-dom'



export function Contact() {

    const [contactData, setContactData] = useState([])

    async function fetchTest() {
      const response = await fetch(
          'https://strapi-mongo-backend.herokuapp.com/contact-pages'
      )
    
      const json = await response.json()
    
      setContactData(json)
    }
  
    useEffect(()=> {
      fetchTest()
    },[])
  
    console.log(contactData)
  

    return(
        <div className="contact">
            <section className="contactBanner">
                <h2>Contact Us</h2>

            </section>
            <section className="contactTop">
                <div>
                {contactData && contactData.map(contactData => (<p>{contactData.contactHeader}</p>))}
                </div>
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
                </div>
                <div className="map">
                    <img src={Map}></img>
                </div>
            </section>
        </div>
    );
}