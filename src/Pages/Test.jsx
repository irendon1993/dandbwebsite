import React from 'react'
import HeroVideo from '../Videos/VideoHomeHero.mp4'
import { Link } from 'react-router-dom'


export function Test() {
    return(
        <div className="test">
    <header class="v-header container">
        <div class="fullscreen-video-wrap">   
            <video src={HeroVideo} autoplay="true" loop="true" muted="true">
            </video>
        </div>
        <div class="header-overlay"></div>
        <div class="header-content text-md-center">
            <h1>Welcome Everyone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
        <a class="btn">Find Out More</a>
        </div>
  </header>
        </div>
    );
}