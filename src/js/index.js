//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";


//render your react application


const IntervalID= setInterval(myCallBack, 1000);

let counter = 0;
function myCallBack () {
	counter ++
    ReactDOM.createRoot(document.getElementById('app')).render(<SecondsCounter seconds={counter}/>); 
}