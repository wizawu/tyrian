import "../../css/app.less";

import ReactDOM from "react-dom";
import { IndexRoute, Route, Router } from "react-router";

import "../mockxhr";
import Home from "../components/Home";

const App = React.createClass({
    render() {
        return <div>{this.props.children}</div>;
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="*" component={Home} />
        </Route>
    </Router>
), document.querySelector("section"));
