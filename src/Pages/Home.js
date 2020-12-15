import React from 'react'
import Hero from '../Images/ImageHalter.jpg' 
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

            </div>
        </section>
        </div>
    )
}