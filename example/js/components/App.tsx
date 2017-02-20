import * as React from "react"
import {Box} from "react-polymer-layout"

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <Box justified>
                <div>Hello, React!</div>
                <div>{Date.now()}</div>
                {this.props.children}
            </Box>
        )
    }
}
