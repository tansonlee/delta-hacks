import React from "react";
import "./HomePage.css";

function HomePage() {
	return(
		<>
			<div className="intro-block">
				
				<h1 className="title">COVID-19</h1>
				<h1 className="heading">VACCINE TRACKER</h1>
				<h1 className="subtitle">Educate yourself on how to protect yourself from the virus.</h1>
			</div>

			<div className="about-block">
				<h2 className="about">Why VaccTracc</h2>
				<h2 className="about-text">
					<h2 className="text1">
					COVID-19 has had a huge impact on our lives. With Ontario beginning to pick up on their 
					vaccination timeline, we recognized that there is currently no data to track the number of 
					vaccinations per region - only total number of vaccinations across the province. 
					This data, in conjunction with the current provincial framework, could be critically used 
					by our government to troubleshoot potential logistics issues, provide information on localized 
					resistance to vaccinations, and concurrently ensure that current frameworks and policies are effective.
					</h2>
					<h2 className="text2">
					As such, we propose VaccTracc, a tool that provides clear information to the public on the inoculation 
					progress of vaccinations within their district whilst providing data that supports our government’s 
					framework to COVID vaccine rollouts.
					</h2>
				</h2>
			</div>

			<div className="learn-block">
				<h3 className="learnmore">LEARN MORE:</h3>
				
				<div className="link">
					<a href="https://www.ontario.ca/page/government/"> Government of Ontario </a>
					<a href="https://www.vaccines.gov/basics/types/"> Types of Vaccines </a>
				</div>
			</div>
		</>

	);
}

export default HomePage;
