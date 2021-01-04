
import React from 'react'
import HeroVideo from '../Videos/VideoHomeHero.mp4'
import { Link } from 'react-router-dom'


export function Test2() {
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

  <section class="section section-a">
    <div class="container">
      <h2>Section A</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>

  <section class="section section-b">
    <div class="container">
      <h2>Section B</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, impedit amet minima iste autem cumque et maiores blanditiis doloribus aut dolorum quaerat non est voluptatum, tempore ut dolorem voluptas quod quae accusantium, ex inventore ducimus. Beatae mollitia exercitationem, quam similique, consectetur ratione reprehenderit delectus neque eligendi facere soluta dolor ducimus!</p>
    </div>
  </section>
  </div>
      );
    }