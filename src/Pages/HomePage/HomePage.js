import React from "react";
import "./HomePage.css";

function HomePage() {
	return(
		<>
			<div className="intro-block">
				<h1 className="title">COVID-19</h1>
				<h1 className="title">vaccine tracker</h1>
				<h1 className="subtitle">Educate yourself on how to protect yourself from the virus.</h1>
			</div>
			<hr />
			<div className="about-block">
				<h2 className="about">Why Vacc Tracc</h2>
				<h2 className="about-text">hdeiufhfhehufhiuhei</h2>
			</div>
			<hr />
			<div className="learn-block">
				<h3 className="learn-more">LEARN MORE:</h3>
				
				<div className="link">
					<a href="https://www.ontario.ca/page/government/"> Government of Ontario </a>
					<a href="https://www.vaccines.gov/basics/types/"> Types of Vaccines </a>
				</div>
			</div>
		</>

	);
}

export default HomePage;
