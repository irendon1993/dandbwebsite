import React from 'react'
import SolutionsBanner from '../Images/ImageSolutionsHero.jpg'
import CncItem from '../Images/ImageCNCMenuItem.jpg'
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
                <Link to="/milling"><img src={CncItem}></img></Link>
            </section>
        </div>
    );
}