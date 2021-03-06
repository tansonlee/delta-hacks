import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import VaccinationsPage from "./Pages/VaccinationsPage/VaccinationsPage";
import CasesPage from "./Pages/CasesPage/CasesPage";
import Navbar from "./Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/vaccinations" component={VaccinationsPage} />
					<Route path="/cases" component={CasesPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
