import image from './cracker.jpg';
import { Link } from 'react-router-dom';

const Crackers = () => {
	return (
		<div>
			<img src={image} />
			<Link to="/">Back To Vending Machine</Link>
		</div>
	);
};

export default Crackers;
