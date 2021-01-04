import React from 'react'
import { Link } from 'react-router-dom'
import HeroVideo from '../Videos/VideoHomeHero.mp4'
import Hero from '../Images/ImageHalter.jpg' 
import LightsOut from '../Images/ImageLightsOut.jpg'
import Kanban from '../Images/ImageKanban.jpg'
import Quality from '../Images/ImageQuality.jpg'




export function Home() {
    return (
        <div className="home">
            <header class="v-header container">
                <div class="fullscreen-video-wrap">
                    <video src={HeroVideo} autoplay="true" loop="true" muted="true">
                </video>
                </div>
                <div class="header-overlay"></div>
                <div class="header-content text-md-center">
                    <h1>Quality Engineered Solutions</h1>
                    <p>Technologically equipped with state of the art milling and turning centers to handle any unique machine part your business may require.</p>
                    <a class="btn">Find Out More</a>
                </div>
            </header>
            <section className="homeDivider">
                <h2>Solve your manufacturing problems with D&B</h2>
        </section>
        <section className="features">
            <div className="lightsOut">
                <div className="lightsImage"><img src={LightsOut} /></div>
                
                <div className="lightsText">
                    <h3>Lights Out Manufacturing</h3>
                <p>Precision matching of components from many materials, typically stainless steel, carbon steel,
                    aluminum alloys, plastics and other non-ferrous materials.
                </p>

                <p className="smallP">
                    D & B Machine uses automated parts loaders, automatic tool changers and computer controls
                    that allow machine tools to operate around the clock, at times totally unattended. Operating two
                    shifts D & B's skilled machinists each monitor fromone to four machines and chart to accuracy parts
                    being produced using SPC.
                </p>
                <Link to="/solutions"><button className="push-button-3d"><span>Learn More</span></button></Link>
                </div>
            </div>
            <div className="kanban">
                <div className="kanbanText">
                <h3>Kanban Scheduling</h3>
                <p>
                    D & B Machine manufactures and inventories 
                    components for clients as needed for final 
                    assembly. Components are produced in
                    batches at D & B Machine to amortize client
                    machining setup costs and sequenced
                    by part to minimize the number of client
                    tool changes.
                </p>
                <p>
                    By monitoring client demand, 
                    D & B Machine determines what products
                    in what quantities need to be machined 
                    and prepared for delivery. D & B Machine
                    maintains secure, climate-controlled 
                    warehousing space to inventory parts for
                    our Kanban clients.
                </p>
                
                <Link to="/solutions"><button className="push-button-3d"><span>Learn More</span></button></Link>
                </div>
                <div className="kanbanImage">
                <img src={Kanban}></img>
                </div>
            </div> 
            <div className="qualityAssurance">
                <div className ="qualityImage">
                    <img src={Quality}></img>
                </div>
                <div className="qualityText">
                    <h3>Quality Assurance</h3>
                    <p>D & B Machine is ISO 9001: 2015 Certified to
                        manufacture (Mil.)components for military and
                        civilian equipment.
                    </p>
                    <p>
                        D & B Machine routinely upgrades its inspection 
                        capabilities to improve the efficiency and accuracy
                        of the quality assurance process. Our complete line
                        of inspection equipment is calibrated and certified.
                    </p>
                    <Link to="/quality"><button className="push-button-3d"><span>Learn More</span></button></Link>
                </div>
                
            </div>
        </section>
        
        </div>
    )
}