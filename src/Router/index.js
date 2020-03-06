import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../Home"
import How from "../How"
import Game from "../Game"

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/how" component={How} />
                <Route exact path="/game" component={Game} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
