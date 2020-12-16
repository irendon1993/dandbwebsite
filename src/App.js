
import './Styles/main.scss'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './Components/Header.js'
import {Footer} from './Components/Footer.js'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import {Solutions} from './Pages/Solutions'
import { Quality } from "./Pages/Quality"
import {Contact} from "./Pages/Contact"
export function App() {

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/quality" component={Quality} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/milling" component={Contact} />

      </Switch>
      <Footer />
    </main>
  )
}
export default App;
