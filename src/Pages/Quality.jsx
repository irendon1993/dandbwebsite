import React, { useEffect, useState } from "react";
import QualityHero from "../Images/ImageQualityHero.jpg";
import IsoImage from "../Images/imageISOCert.png";
import KeyeneceImage from "../Images/ImageKeyence.jpg";
import CmmImage from "../Images/ImageCMM.jpg";
import MeasureLinkImage from "../Images/ImageMeasureLink.jpg";
import { Link } from "react-router-dom";

export function Quality() {
  const [qualityData, setQualitytData] = useState([]);

  async function fetchTest() {
    const response = await fetch(
      "https://strapi-mongo-backend.herokuapp.com/quality-pages"
    );

    const json = await response.json();

    setQualitytData(json);
  }

  useEffect(() => {
    fetchTest();
  }, []);

  console.log(qualityData);

  return (
    <div className="quality">
      <section className="qualityHero">
        <img src={QualityHero}></img>
      </section>
      <section className="iso">
        <div className="isoText">
          <h2>Quality Matters</h2>
          {qualityData &&
            qualityData.map((qualityData) => <p>{qualityData.TopText}</p>)}
        </div>
        <div className="isoImage">
          <img src={IsoImage}></img>
        </div>
      </section>
      <section className="precisionBanner">
        <h2>Precision Instruments</h2>
      </section>
      <section className="instruments">
        <div className="keyence">
          <div className="keyenceText">
            <h2>Keyence IM-7001 Image Dimension Measurement System</h2>
            {qualityData &&
              qualityData.map((qualityData) => (
                <p>{qualityData.KeyenceParagraph}</p>
              ))}
          </div>
          <div className="keyenceImage">
            <img src={KeyeneceImage}></img>
          </div>
        </div>

        <div className="cmm">
          <div className="cmmText">
            <h2>Zeiss DuraMax CMM </h2>
            {qualityData &&
              qualityData.map((qualityData) => (
                <p>{qualityData.cmmParagraph}</p>
              ))}
          </div>
          <div className="cmmImage">
            <img src={CmmImage}></img>
          </div>
        </div>
        <div className="measureLink">
          <div className="measureLinkText">
            <h2>Measurlink SPC Real Time Software</h2>
            {qualityData &&
              qualityData.map((qualityData) => (
                <p>{qualityData.measurelinktext}</p>
              ))}
          </div>
          <div className="measureLinkImage">
            <img src={MeasureLinkImage}></img>
          </div>
        </div>
      </section>
    </div>
  );
}
