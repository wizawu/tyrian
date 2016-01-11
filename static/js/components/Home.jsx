const React = require("react");

const store = require("../store");
const actions = require("../actions");

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
        actions.login({user: this.refs.input.getDOMNode().value});
    },

    _signOut() {
        actions.logout();
    },

    render() {
        let i18n = store.getState().i18n;
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this._signIn}>{i18n.t("signin")}</button>
                <button onClick={this._signOut}>{i18n.t("signout")}</button>
                <button onClick={_ => store.dispatch2("SETLNG", "zh-CN")}>
                    {i18n.t("setlng")}
                </button>
                <div>{this.state.email}</div>
            </div>
        );
    }
});

export default Home;
