import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
//import appReducers from "./reducers"
import appReducers from "./reducers/index"


// Create's the App store -- OLD representation
//let appStore = createStore(productReducer);

// Create's the App store by combining two reducers
//let appStore = createStore(combineReducers({productReducer, cartReducer}));

// Create's App store by using external combine reducer
let appStore = createStore(appReducers);

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById("root"));

