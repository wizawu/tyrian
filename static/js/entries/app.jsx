require("../../css/app.less");
require("../mockxhr");

const ReactDOM = require("react-dom");
const { IndexRoute, Route, Router } = require("react-router");

const Home = require("../components/Home");

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
), document.body);
