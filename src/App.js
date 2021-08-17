import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Home from './page/Home'
import Service from './page/Service'
import './style.css'
import ServicesDeytail from './companents/ServicesDeytail'

const App = () => {
    return (
        <div className="App">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/service">
                    <Service/>
                </Route>
                <Route path="/service/:id">
                    <ServicesDeytail/>
                </Route>
            </Switch>
        </div>
    )
}

export default App
