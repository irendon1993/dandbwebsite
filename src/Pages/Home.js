import React from 'react'
import Hero from '../Images/ImageHalter.jpg' 
import LightsOut from '../Images/ImageLightsOut.jpg'


import { Link } from 'react-router-dom'



export function Home() {
    return (
        <div className="home">
            <section className="hero">
                 <img src={Hero} width="1400px"/>
            </section>
            <section className="homeDivider">
                <h2>Solve your manufacturing problems with D&B</h2>
        </section>
        <section className="features">
            <div className="lightsOut">
                <img src={LightsOut} />
                <div className="lightsText">
                    <h3>Lights Out Manufacturing</h3>
                <p>Precision matching of components from many materials, typically stainless steel, carbon steel,
                    aluminum alloys, plastics and other non-ferrous materials.
                </p>

                <p>
                    D & B Machine uses automated parts loaders, automatic tool changers and computer controls
                    that allow machine tools to operate around the clock, at times totally unattended. Operating two
                    shifts D & B's skilled machinists each monitor fromone to four machines and chart to accuracy parts
                    being produced using SPC.
                </p>
                <button><span>Learn More</span></button>
                </div>
            </div>
            <div className="kanban">
                <img ></img>
            </div> 
        </section>
        </div>
    )
}