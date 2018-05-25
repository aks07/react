import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import {NotFound} from "./error/NotFoundComponent";
import Home from "./HomeComponent";
import ManageProducts from "./shopping/ManageProducts";

class App extends React.Component {
    /*
    render() {
        return <div>
                <h1 className="well">Wells Fargo</h1>
                <h3>Bangalore</h3>
            </div>
    }
    */

    render() {
        return <div>
                <nav className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">My React App</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/manage">Manage Products</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/manage" component={ManageProducts} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
    }
}

export default App;