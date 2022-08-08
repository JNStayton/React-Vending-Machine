import image from './cheetos.jpg';
import { Link } from 'react-router-dom';

const Cheetos = () => {
	return (
		<div>
			<img src={image} />
			<Link to="/">Back To Vending Machine</Link>
		</div>
	);
};

export default Cheetos;
