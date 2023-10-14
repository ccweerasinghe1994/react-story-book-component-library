import Button from './Components/Button/Button';
import { DiApple } from 'react-icons/di';

function App() {
	return (
		<div className="flex flex-col items-center mt-20 gap-10">
			<div>
				<Button type="danger" size="small" rounded>
					<DiApple />
					normal
				</Button>
			</div>
		</div>
	);
}

export default App;
