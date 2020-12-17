import React from 'react'
import QualityHero from '../Images/ImageQualityHero.jpg'
import IsoImage from '../Images/imageISOCert.png'
import KeyeneceImage from '../Images/ImageKeyence.jpg'
import { Link } from 'react-router-dom'

export function Quality() {
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
                        <h3>
                        Keyence IM-7001 Image Dimension Measurement System
                        </h3>
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
                <div>

                </div>
                <div>

                </div>
            </section>
        </div>
    );
}