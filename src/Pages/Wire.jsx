import React, { useEffect, useState } from "react";
import wireHero from "../Images/edmHero.jpg";
import { Link } from "react-router-dom";

export function Wire() {
  const [wireData, setWireData] = useState([]);

  async function laserTest() {
    const response = await fetch(
      "https://strapi-mongo-backend.herokuapp.com/about-pages"
    );

    const json = await response.json();

    setWireData(json);
  }

  useEffect(() => {
    laserTest();
  }, []);

  console.log(wireData);

  return (
    <div className="wire">
      <h1>Laser Engraving</h1>

      <div className="wireBox">
        <div className="wireHero">
          <img src={wireHero} />
        </div>
        <div className="wireText">
          <p>
            The RoboCut 400CiB Wire EDM machine features the powerful FANUC
            31i-WB control with new iHMI User Interface, enhanced Automatic Wire
            Feed System and an advanced all digital power supply. The economy
            mode is standard and allows for energy and wire usage savings. All
            CiB-Series machines burn with virtually no re-cast.
          </p>
          <br></br>
          <p>
            FANUC Ultra reliable AWF3 system has been engineered to thread work
            pieces of up to 10″ thick. All RoboCut’s feature the patented twin
            servo automatic wire tension control ensuring accurate, straight
            parts. Above all, the RoboCut CiB-Series EDMs are built 100% in
            Japan and offer exceptional reliability for which FANUC is known
            worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
