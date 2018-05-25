import React, {Component} from "react"

export default class MySign extends Component {
    render() {
        console.log("Render...");

        return <div>
            <h3>{this.props.heading}</h3>
            <form>
                <input ref="userId" type="text" placeholder="Enter User Id" /> &nbsp;
                <input ref="pwd" type="password" placeholder="Enter Password" /> &nbsp;
                <input ref="cPwd" type="password" placeholder="Confirm Password" className={this.props.hideConfirmPwd === "true" ? "hide" : "visible-lg-inline"} /> &nbsp;
                <button type="button" className="btn btn-primary" onClick={this.sendData}>{this.props.buttonText}</button>
            </form>
        </div>
    }

    sendData = () => {
        this.props.onSignIn !== undefined && this.props.onSignIn(this.refs.userId.value);
    }

    constructor() {
        super();
        console.log("Constructor...");
        //.log("Props in Constructor...", this.props.heading);
    }

    componentWillMount() {
        console.log("componentWillMount...");
        console.log("Props in componentWillMount...", this.props.heading);
    }

    componentDidMount() {
        console.log("componentDidMount...");
        console.log("Props in componentDidMount...", this.props.heading);
        // document.querySelector("h3").style.color = "Red";
    }

    componentWillUnmount() {
        console.log("componentWillUnmount...");
        console.log("Props in componentWillUnmount...", this.props.heading);
    }
}