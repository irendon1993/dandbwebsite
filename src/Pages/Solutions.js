import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SolutionsBanner from '../Images/ImageSolutionsHero.jpg'
import MillingItem from '../Images/ImageCNCMenuItem.jpg'
import TurningItem from '../Images/ImageTurningMenuItem.jpg'
import LaserItem from '../Images/ImageLaserMenuItem.jpg'
import WireItem from '../Images/ImageWireMenuItem.jpg'
import { Link } from 'react-router-dom'


export function Solutions() {
    return(
        
        
        <div className="solutions">
            <section className="solutionsBanner">
                <h2>Solutions</h2>
            </section>
            <section className="solutionsHero">
                <img src={SolutionsBanner}/>
            </section>
            <section className="solutionsMenu">
                <Link to="/milling"><img src={MillingItem}></img></Link>
                <Link to="/turning"><img src={TurningItem}></img></Link>
                <Link to="/laser"><img src={LaserItem}></img></Link>
                <Link to="/wire"><img src={WireItem}></img></Link>
                
            </section>
           
        </div>
    );
}