import "../../css/app.less"

import Inferno from "inferno"
import Route from "inferno-route"
import App from "../components/App"

console.log(window.InfernoBeaker)

Inferno.render((
    <Route path="#">
        <Route path="app" component={App} />
    </Route>
), document.querySelector("section"))

window.location.hash = "#/app"
