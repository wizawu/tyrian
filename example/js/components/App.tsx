import Component from "inferno-component"
import {Box} from "react-polymer-layout"

export default class App extends Component<{}, {}> {
    render() {
        return (
            <Box justified>
                <div>Hello, Inferno</div>
                <div>{Date.now()}</div>
            </Box>
        )
    }
}
