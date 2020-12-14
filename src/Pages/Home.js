import React from 'react'
import Hero from '../Images/ImageHalter.jpg' 
import { Link } from 'react-router-dom'



export function Home() {
    return (
        <body>
            <div className="boddy">
                 <img src={Hero} width="1400px"/>
            </div> 
        </body>
    )
}