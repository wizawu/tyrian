import "../../css/app.less"

import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRedirect, browserHistory} from "react-router"
import App from "../components/App"

ReactDOM.render((
    <Router>
        <Route path="/">
            <IndexRedirect path="app" />
            <Route path="app" component={App} />
        </Route>
    </Router>
), document.querySelector("section"))
