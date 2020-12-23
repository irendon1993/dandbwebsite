
import './Styles/main.scss'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './Components/Header.js'
import {Footer} from './Components/Footer.js'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import {Solutions} from './Pages/Solutions'
import {Quality} from "./Pages/Quality"
import {Contact} from "./Pages/Contact"
import {Milling} from './Pages/Milling'
import {Turning} from "./Pages/Turning"
import {Laser} from "./Pages/Laser"
import {Wire} from "./Pages/Wire"
import Navbar from './Components/Navbar.js'


export function App() {

  return (
    <main className="App" id="outer-container">
      <Header />
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
