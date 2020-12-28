
import './Styles/main.scss'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {Footer} from './Components/Footer.jsx'
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import {Solutions} from './Pages/Solutions.jsx'
import {Quality} from "./Pages/Quality.jsx"
import {Contact} from "./Pages/Contact.jsx"
import {Milling} from './Pages/Milling.jsx'
import {Turning} from "./Pages/Turning.jsx"
import {Laser} from "./Pages/Laser.jsx"
import {Wire} from "./Pages/Wire.jsx"
import Navbar from './Components/Navbar.jsx'


export function App() {

  return (
    <main className="App" id="outer-container">
     
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/quality" component={Quality} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/milling" component={Milling} />
        <Route exact path="/turning" component={Turning} />
        <Route exact path="/wire" component={Wire} />
        <Route exact path="/laser" component={Laser} />
      </Switch>
      <Footer />
    </main>
  )
}
export default App;
