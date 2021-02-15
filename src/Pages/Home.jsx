import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../Videos/VideoHomeHero.mp4";
import Hero from "../Images/ImageHalter.jpg";
import LightsOut from "../Images/ImageLightsOut.jpg";
import Kanban from "../Images/ImageKanban.jpg";
import Quality from "../Images/ImageQuality.jpg";

export function Home() {
  const [homeData, setHomeData] = useState([]);

  async function fetchTest() {
    const response = await fetch(
      "https://strapi-mongo-backend.herokuapp.com/home-pages"
    );

    const json = await response.json();

    setHomeData(json);
  }

  useEffect(() => {
    fetchTest();
  }, []);

  console.log(homeData);

  return (
    <div className="home">
      <header class="v-header container">
        <div class="fullscreen-video-wrap">
          <video
            src="https://res.cloudinary.com/dlxtczqfr/video/upload/v1613405946/Sarasota.ManufactoringPlant.2021_zazaar.mp4"
            autoplay="true"
            loop="true"
            muted="true"
          ></video>
          <img src={Hero} />
        </div>
        <div class="header-overlay"></div>
        <div class="header-content text-md-center">
          <h1>Quality Engineered Solutions</h1>
          {homeData && homeData.map((homeData) => <p>{homeData.HeroText}</p>)}
          <Link to="/solutions">
            <button className="Button">
              <span>Learn More</span>
            </button>
          </Link>
        </div>
      </header>
      <section className="homeDivider">
        <h2>Solve your manufacturing problems with D&B</h2>
      </section>
      <section className="features">
        <div className="lightsOut">
          <div className="lightsImage">
            <img src={LightsOut} />
          </div>

          <div className="lightsText">
            <h3>Lights Out Manufacturing</h3>
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.LightsFirstParagraph}</p>
              ))}
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.LightsSecondParagraph}</p>
              ))}

            <Link to="/solutions">
              <button className="Button">
                <span>Learn More</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="kanban">
          <div className="kanbanText">
            <h3>Kanban Scheduling</h3>
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.KanbanFirstParagraph}</p>
              ))}
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.KanbanSecondParagraph}</p>
              ))}
            <Link to="/solutions">
              <button className="Button">
                <span>Learn More</span>
              </button>
            </Link>
          </div>
          <div className="kanbanImage">
            <img src={Kanban}></img>
          </div>
        </div>
        <div className="qualityAssurance">
          <div className="qualityImage">
            <img src={Quality}></img>
          </div>
          <div className="qualityText">
            <h3>Quality Assurance</h3>
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.QualityFirstParagraph}</p>
              ))}
            {homeData &&
              homeData.map((homeData) => (
                <p>{homeData.QualitySecondParagraph}</p>
              ))}
            <Link to="/quality">
              <button className="Button">
                <span>Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
