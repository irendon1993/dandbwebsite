import React from "react";
import MillingItem from "../Images/ImageCNCMenuItem.jpg";
import { Link } from "react-router-dom";

export function Milling() {
  return (
    <div className="milling">
      <section className="millingHero">
        <img src={MillingItem}></img>
      </section>
      <section className="millingEquipment">
        <div className="millingIntro">
          <h2>MILLING CENTERS</h2>
          <p>
            3 and 4-axis horizontal and vertical machining centers with milling
            bed length up to 40 inches
          </p>
        </div>
        <div className="millingBody">
          <div className="leftText">
            <p>
              3 - Mori-Seiki NH4000 Horizontal Machining Centers 3 Pallet APC –
              60 tool ATC 30 h.p. 14,000 rpm spindle 1,000 psi high pressure
              coolant system
            </p>
            <p>
              2 - Mori-Seiki NH4000 Horizontal Machining Centers 3 Pallet APC –
              120 tool ATC 30 h.p. 14,000 rpm spindle 1,000 psi high pressure
              coolant system
            </p>

            <p>
              1 - Mori-Seiki DuraVertical 5100 Machining Center 25 h.p. 12,000
              rpm spindle with 30 tool ATC 20” x 40" table
            </p>
            <p>
              2 - Mori-Seiki DuraVertical 5060 Machining Centers 10,000 rpm
              spindle with 30 tool ATC Nikken 4th axis 1,000 psi high pressure
              coolant system
            </p>
          </div>
          <div className="middleText">
            <p>
              1 - Doosan VC510 Vertical Machining Center 25 h.p. 10,000 rpm
              spindle with 30 tool ATC 2 Pallet APC 22” x 33"
            </p>
            <p>
              1 - Doosan VC430 Vertical Machining Center 25 h.p. 12,000 rpm
              spindle with 40 tool ATC 4th Axis x 2 Pallet APC 19” x 28"
            </p>
            <p>
              1 - Doosan VC360 Vertical Machining Center 25 h.p. 12,000 rpm
              spindle with 20 tool ATC 2 Pallet APC 15” x 25"
            </p>
            <p>
              Doosan VC 510 Vertical Machining Center 25 h.p., 10,000, 30 tools
              ATC, 2 pallet 22" x 33"
            </p>
            <p>
              Doosan DNM 4500 Vertical Machining Center 12,000 RPM, 30 tools
              ATC, 4th axis
            </p>
          </div>
          <div className="rightText">
            <p>
              1 - Brother Speedio R450X2 Machining Center 2 Pallet APC with 22
              tool ATC 16,000 RPM Spindle High PSI
            </p>
            <p>
              1 - Brother Speedio R450X1 Machining Center 2 Pallet APC with 22
              tool ATC 16,000 RPM Spindle High PSI
            </p>
            <p>
              1 - Brother Speedio R650X1 Machining Center 2 Pallet APC with 22
              tool ATC 16,000 RPM Spindle High PSI
            </p>

            <p>1 - Miltronics MB20 CNC Tool Room Mill</p>
          </div>
        </div>
      </section>
    </div>
  );
}
