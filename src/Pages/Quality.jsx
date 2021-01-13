import React, {useEffect,useState} from 'react'
import QualityHero from '../Images/ImageQualityHero.jpg'
import IsoImage from '../Images/imageISOCert.png'
import KeyeneceImage from '../Images/ImageKeyence.jpg'
import CmmImage from '../Images/ImageCMM.png'
import MeasureLinkImage from '../Images/ImageMeasureLink.jpg'
import { Link } from 'react-router-dom'

export function Quality() {

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
        <div className="quality">
            <section className="qualityHero">
                <img src={QualityHero}></img>
            </section>
            <section className="iso">
                <div className="isoText">
                    <h2>Quality Matters</h2>
                    <p>D & B Machine is constantly striving to improve our inspection capabilities, 
                        efficiency and accuracy which bottom line, saves us money—saves you money. 
                        All inspection equipment is routinely calibrated and certified.</p>
                </div>
                <div className="isoImage">
                    <img src={IsoImage}></img>
                </div>
            </section>
            <section className="precisionBanner">
                <h2>
                    Precision Instruments
                </h2>
            </section>
            <section className="instruments">
                <div className="keyence">
                    <div className="keyenceText">
                        <h2>
                        Keyence IM-7001 Image Dimension Measurement System
                        </h2>
                        <p>
                        IM-7000 series image dimension measurement system,
                         with newly developed high-speed and high-precision stage,
                          offers a measurement field of view that is 200mm × 200mm (7.87" × 7.87"). 
                          Press the button and in 3 seconds users receive 99 measurements on up to 
                          100 parts with an OK/NG judgment, significantly reducing quality inspection time. 
                          The IM automatically records and saves results as the measurement is performed.
                        </p>
                    </div>
                    <div className="keyenceImage">
                        <img src={KeyeneceImage}></img>
                    </div>
                </div>
   
                <div className="cmm"> 
                    <div className="cmmText">
                            <h2>Zeiss DuraMax CMM </h2>
                            <p>A direct computer control measurement station that can automatically inspect
                                 parts up to 500 x 500 x 500 mm. Our CMM operates with Zeiss’s Calypso software 
                                 that allows us to import a solid model of the part and then inspect the part to 
                                 the solid model.
                            </p>
                    </div>
                    <div className="cmmImage">
                        <img src={CmmImage}></img>
                    </div>
                </div>
               <div className="measureLink">
                   <div className="measureLinkText">
                        <h2>Measurlink SPC Real Time Software</h2>
                        <p>The Measurelink SPC Real Time Software with 8-port inspection gauge interface logs
                             inspection readings completed by operators and inspectors for a specific part. 
                             Measurelink statistically detects and graphs part variations and trends.
                        </p>
                   </div>
                   <div className="measureLinkImage">
                       <img src={MeasureLinkImage}></img>

                   </div>
                   
               </div>
            </section>
        </div>
    );
}