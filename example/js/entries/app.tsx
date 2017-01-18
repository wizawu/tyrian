import "../../css/app.less"

import Inferno from "inferno"
import App from "../components/App"

console.log(window.InfernoBeaker)

Inferno.render(<App />, document.querySelector("section"))
