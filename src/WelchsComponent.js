import image from './welchs.jpg';
import { Link } from 'react-router-dom';

const Welchs = () => {
	return (
		<div>
			<img src={image} />
			<Link to="/">Back To Vending Machine</Link>
		</div>
	);
};

export default Welchs;
