const {
    React,
} = require("../namespace");

const LoginActions = require("../actions/LoginActions");
const LoginStore = require("../stores/LoginStore");
const i18nStore = require("../stores/i18nStore");

const Home = React.createClass({
    getInitialState() {
        return {
            email: ""
        };
    },

    componentDidMount() {
        i18nStore.subscribe(this._onChange);
        LoginStore.subscribe(this._onChange);
    },

    _onChange() {
        this.setState({
            email: (LoginStore.getState() || {}).email
        });
    },

    _signIn() {
        LoginActions.login({user: this.refs.input.getDOMNode().value});
    },

    _signOut() {
        LoginActions.logout();
    },

    render() {
        let i18n = i18nStore.getState();

        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this._signIn}>{i18n.t("common.signin")}</button>
                <button onClick={this._signOut}>{i18n.t("common.signout")}</button>
                <button onClick={_ => i18nStore.dispatch({type: "SETLNG", data: "zh-CN"})}>
                    {i18n.t("common.setLng")}
                </button>
                <div>{this.state.email}</div>
            </div>
        );
    }
});

export default Home;
