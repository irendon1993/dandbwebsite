import React from "react";
import { Route, Switch } from "react-router-dom";
import SolutionsBanner from "../Images/ImageSolutionsHero.jpg";
import MillingItem from "../Images/ImageCNCMenuItem.jpg";
import TurningItem from "../Images/ImageTurningMenuItem.jpg";
import LaserItem from "../Images/ImageLaserMenuItem.jpg";
import WireItem from "../Images/ImageWireMenuItem.jpg";
import StampingItem from "../Images/ImageStampingMenuItem.jpg";
import { Link } from "react-router-dom";

export function Solutions() {
  return (
    <div className="solutions">
      {/* <section className="solutionsBanner">
        <h2>Solutions</h2>
      </section> */}
      <section className="solutionsHero">
        <img src={SolutionsBanner} />
      </section>
      <section className="solutionsMenu">
        <div className="topMenu">
          <div className="milling">
            <Link to="/milling">
              <img src={MillingItem}></img>
            </Link>
          </div>
          <div className="turning">
            <Link to="/turning">
              <img src={TurningItem}></img>
            </Link>
          </div>
        </div>
        <div className="middleMenu">
          <div className="wire">
            <Link to="/wire">
              <img src={WireItem}></img>
            </Link>
          </div>
          <div className="laser">
            <Link to="/laser">
              <img src={LaserItem}></img>
            </Link>
          </div>
        </div>
        <div className="bottomMenu">
          <div className="stamping">
            <Link to="/stamping">
              <img src={StampingItem}></img>
            </Link>
          </div>
          <div className="hiddenBox">
            <img src={StampingItem}></img>
          </div>
        </div>
      </section>
    </div>
  );
}
