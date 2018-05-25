/*
import Point from "./module1";
import {Point3D} from "./module1";

console.log("It's working...");

// Instance of Point Class
let pt1 = new Point(3, 5);
pt1.display();

// Instance of Point Class
let pt2 = new Point3D(3, 5, 10);
pt2.display();
*/

// Refer API
import React from "react";
import ReactDOM from "react-dom";

//Define an Element
//let element = React.createElement("u", null, "My First React Application");

//Acquire Container
let rootObj = document.getElementById("root");

// Render the element
//ReactDOM.render(element, rootObj);


ReactDOM.render(
    <div>
        <h3>Welcome to React</h3>
        <u>Wells Fargo</u>
        <p>{12+52}</p>
        <p>{"Wells Fargo"}</p>
        {/*<p>{112+52}</p>*/}
    </div> 
, rootObj);


// Define a Functional Component
let MyTag = () => {
    return <h1>First Functional Component</h1>;
};

// Render MyTag in root area
ReactDOM.render(<MyTag/>, rootObj);