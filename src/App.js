
import './Styles/main.scss'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './Components/Header.js'
import { Home } from './Pages/Home'

export function App() {

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  )
}
export default App;
