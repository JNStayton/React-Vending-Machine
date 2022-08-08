import { Link } from 'react-router-dom';
import image from './vending.jpg';

const VendingMachine = () => {
	return (
		<div>
			<img src={image} />
			<Link to="/cheetos">Cheetos?</Link>
			<Link to="/crackers">Crackers?</Link>
			<Link to="/welchs">Welch's Fruit Snacks?</Link>
		</div>
	);
};

export default VendingMachine;
