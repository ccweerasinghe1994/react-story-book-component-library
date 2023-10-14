import Button from './Components/Button/Button';
import { DiApple } from 'react-icons/di';
import Heading from './Components/Header/Header';
import Modal from './Components/Modal/Modal';

function App() {
	return (
		<div className="flex flex-col items-center mt-20 gap-10">
			<div>
				<Button type="danger" size="small" rounded>
					<DiApple />
					normal
				</Button>
			</div>
			<div>
				<Heading level={4}>this is a heading</Heading>
			</div>
		</div>
	);
}

export default App;
