import "../../css/app.less"

import * as React from "react"
import * as ReactDOM from "react-dom"
import {Router, Route, IndexRedirect, hashHistory} from "react-router"

import App from "../components/App"

console.log(window.React.version)

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="app" />
            <Route path="app" component={null} />
        </Route>
    </Router>
), document.querySelector("section"))
