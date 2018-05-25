import React, {Component} from "react"
import MySign from "./MySignComponent"

export default class SignUp extends Component {

    render() {
        return <MySign heading="Quick Sign Up" buttonText="Sign Up" onSignIn={this.handleSignIn} />
    }

    handleSignIn = (uname) => {
        this.setState({loggedUserName: uname});
        this.props.history.push('/signin');
        
        // <Redirect to={{
        //     pathname: '/login',
        //     search: '?utm=your+face',
        //     state: { referrer: currentLocation }
        //   }}/>

        /*
        RouterContext.push({
            pathname: '/signin',
            query: { modal: true },
            state: { loggedUserName: uname }
        })
        */
    }
}