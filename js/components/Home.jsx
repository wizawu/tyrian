const {
    React,
} = require("../namespace");

const store = require("../store");
const LoginActions = require("../actions").login;

const Home = React.createClass({
    getInitialState() {
        return { email: "" };
    },

    componentDidMount() {
        store.subscribe(this._onChange);
    },

    _onChange() {
        this.setState({
            email: (store.getState().login || {}).email
        });
    },

    _signIn() {
        LoginActions.login({ user: this.refs.input.getDOMNode().value });
    },

    _signOut() {
        LoginActions.logout();
    },

    render() {
        let i18n = store.getState().i18n;
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this._signIn}>{i18n.t("common.signin")}</button>
                <button onClick={this._signOut}>{i18n.t("common.signout")}</button>
                <button onClick={_ => store.dispatch2("SETLNG", "zh-CN")}>
                    {i18n.t("common.setLng")}
                </button>
                <div>{this.state.email}</div>
            </div>
        );
    }
});

export default Home;
