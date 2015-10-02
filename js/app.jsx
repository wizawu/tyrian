require("./mockxhr");

const {
    React,
    ReactRouter,
} = require("./namespace");

const {IndexRoute, Route, Router} = ReactRouter;

const Home = require("./components/Home");

const App = React.createClass({
    render() {
        return <div>{this.props.children}</div>;
    }
});

window.ReactRouter = ReactRouter;

React.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="*" component={Home} />
        </Route>
    </Router>
), document.body);
