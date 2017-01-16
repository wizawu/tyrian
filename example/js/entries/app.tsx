import "../../css/app.less"

import Inferno from "inferno"
import Component from "inferno-component"

declare const React

class App extends Component<{}, {}> {
    render() {
        return <div>Hello, Inferno</div>
    }
}

Inferno.render(<App />, document.querySelector("section"))
