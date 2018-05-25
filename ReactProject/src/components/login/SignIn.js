import React, {Component} from "react"
import MySign from "./MySignComponent"

export default class SignIn extends Component {
    state = {loggedUserName: "Guest"}

    render() {
        return <div>
            <b>Welcome {this.state.loggedUserName}</b>
            <MySign heading="Sign In" buttonText="Log In" hideConfirmPwd="true" onSignIn={this.handleSignIn} />
        </div>
    }

    handleSignIn = (uname) => {
        this.setState({loggedUserName: uname});
    }
}