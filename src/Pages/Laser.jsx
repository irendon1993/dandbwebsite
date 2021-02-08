import React, { useEffect, useState } from "react";
import LaserHero from "../Images/laserHero.jpg";
import { Link } from "react-router-dom";

export function Laser() {
  const [laserData, setLaserData] = useState([]);

  async function laserTest() {
    const response = await fetch(
      "https://strapi-mongo-backend.herokuapp.com/about-pages"
    );

    const json = await response.json();

    setLaserData(json);
  }

  useEffect(() => {
    laserTest();
  }, []);

  console.log(laserData);

  return (
    <div className="laser">
      <h1>Laser Engraving</h1>

      <div className="laserBox">
        <div className="laserHero">
          <img src={LaserHero} />
        </div>
        <div className="laserText">
          <p>
            Laser marking, etching and engraving systems are incredibly
            versatile pieces of equipment that have countless applications for a
            diverse range of businesses.
          </p>
          <p>
            TYKMA Electrox marking systems provide:
            <ol>
              <li>
                Laser marking for identification and traceability using direct
                part marking techniques{" "}
              </li>
              <li> 2D data matrix symbology</li>
              <li> UDI medical marking applications</li>
              <li> Date coding, serialization and lot control </li>
              <li>Product branding</li>
              <li>
                Laser engraving and etching for many other widespread uses for
                all companies
              </li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
