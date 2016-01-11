require("../mockxhr");

const React = require("react");
const { IndexRoute, Route, Router } = require("react-router");

const Home = require("../components/Home");

const App = React.createClass({
    render() {
        return <div>{this.props.children}</div>;
    }
});

React.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="*" component={Home} />
        </Route>
    </Router>
), document.body);
