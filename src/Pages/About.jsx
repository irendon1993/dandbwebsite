import React, {useEffect, useState} from 'react'
import DBBuilding from "../Images/ImageDBBuilding.jpg"
import IconContact from '../Icons/IconContact.svg';
import { Link } from 'react-router-dom'

export function About() {

    const [testData, setTestData] = useState([])

  async function fetchTest() {
    const response = await fetch(
        'https://strapi-mongo-backend.herokuapp.com/about-pages'
    )
  
    const json = await response.json()
  
    setTestData(json)
  }

  useEffect(()=> {
    fetchTest()
  },[])

  console.log(testData)


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
                    {testData && testData.map(testData => (<p>{testData.topFirstParagraph}</p>))}
                    {testData && testData.map(testData => (<p>{testData.topSecondParagraph}</p>))}
                </div>
            </section>
            <section className="dnbBottom">
                <div className="dnbSummary">
                    {testData && testData.map(testData => (<p>{testData.bottomFirstParagraph}</p>))}
                    {testData && testData.map(testData => (<p>{testData.bottomSecondParagraph}</p>))}
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