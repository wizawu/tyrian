const {
    React,
} = require("../namespace");

const LoginActions = require("../actions/LoginActions");
const LoginStore = require("../stores/LoginStore");

const Home = React.createClass({
    propTypes: {
        i18n: React.PropTypes.object
    },

    getInitialState() {
        return {
            email: ""
        };
    },

    componentDidMount() {
        LoginStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        LoginStore.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState({
            email: (LoginStore.getAll() || {}).email
        });
    },

    _signIn() {
        LoginActions.login({user: this.refs.input.getDOMNode().value});
    },

    _signOut() {
        LoginActions.logout();
    },

    render() {
        let i18n = this.props.i18n;

        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this._signIn}>{i18n.t("common.signin")}</button>
                <button onClick={this._signOut}>{i18n.t("common.signout")}</button>
                <div>{this.state.email}</div>
            </div>
        );
    }
});

export default Home;
