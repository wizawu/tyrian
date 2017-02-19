import "../../css/app.less"

import * as React from "react"
import * as ReactDOM from "react-dom"
import {Router, Route, IndexRedirect, browserHistory} from "react-router"
import App from "../components/App"

console.log(window.React.version)

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRedirect to="app" />
            <Route path="app" component={App} />
        </Route>
    </Router>
), document.querySelector("section"))
