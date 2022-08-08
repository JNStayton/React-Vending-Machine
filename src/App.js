import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cheetos from './CheetosComponent';
import Crackers from './CrackersComponent';
import Welchs from './WelchsComponent';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" exact>
					<VendingMachine />
				</Route>
				<Route path="/cheetos" exact>
					<Cheetos />
				</Route>
				<Route path="/crackers" exact>
					<Crackers />
				</Route>
				<Route path="/welchs" exact>
					<Welchs />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
