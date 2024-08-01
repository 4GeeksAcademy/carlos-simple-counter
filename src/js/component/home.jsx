import React from "react";
import Card from "./Card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div className = "conatiner-fluid d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
		</div>
	);
};

export default Home;
