
import './Styles/main.scss'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './Components/Header.js'
import {Footer} from './Components/Footer.js'
import { Home } from './Pages/Home'
import { About } from './Pages/About'

export function App() {

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/solutions" component={About} />
        <Route exact path="/quality" component={About} />
        <Route exact path="/contact" component={About} />
      </Switch>
      <Footer />
    </main>
  )
}
export default App;
