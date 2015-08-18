require("./actions/mockxhr.js");

const {
    React,
    ReactRouter,
    i18n,
} = global.__;

const {DefaultRoute, Route, RouteHandler} = ReactRouter;

const Home = require("./components/Home");
const translation = require("./translation.js");

i18n.init({resStore: translation});

const App = React.createClass({
    propTypes: {
        i18n: React.PropTypes.object
    },

    getInitialState() {
        return { language: "en-US" };
    },

    componentWillMount() {
        this.props.i18n.setLng(this.state.language);
    },

    componentWillUpdate() {
        this.props.i18n.setLng(this.state.language);
    },

    render() {
        return <div><RouteHandler i18n={this.props.i18n} /></div>;
    }
});

let route = (
    <Route path="/" handler={App}>
        <Route path="home" handler={Home} />
        <DefaultRoute handler={Home} />
    </Route>
);

ReactRouter.run(route, Handler => {
    React.render(<Handler i18n={i18n} />, document.body);
});
