import React, { useEffect, useState } from "react";
import StampingHero from "../Images/stampingHero.jpg";
import { Link } from "react-router-dom";

export function Stamping() {
  return (
    <div className="stamping">
      <h1>Metal Stamping </h1>

      <div className="stampingBox">
        <div className="stampingHero">
          <img src={StampingHero} />
        </div>
        <div className="stampingText">
          <p>
            Machines for stamping press processing thin metal plates with dies.
            Used in processes for manufacturing electronic components such as
            terminals, and products such as automotive parts that require
            drawing processing.
          </p>
          <br />
          <p>
            Equipment List:
            <ol>
              <li>AMADA SDE-1120 Digital Electric Servo Press -121 TON</li>
              <li>Komatsu 25, and 60 Ton Punch Presses</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
