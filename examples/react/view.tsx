import React from "react"

interface Props {
    name: string
}

export default class View extends React.Component<Props, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>
    }
}
