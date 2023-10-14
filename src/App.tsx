import Table, { TData, TTableConfig } from './Components/Table/Table';

export const sampleTableData: TData[] = [
	{ key: '0', name: 'orange', color: 'bg-orange-500', score: 1 },
	{ key: '0', name: 'apple', color: 'bg-red-500', score: 2 },
	{ key: '0', name: 'banana', color: 'bg-yellow-500', score: 3 }
];

export const configArray: TTableConfig[] = [
	{
		label: 'name',
		render: (fruit) => fruit.name
	},
	{
		label: 'color',
		render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>
	},
	{
		label: 'score',
		render: (fruit) => fruit.score
	}
];

function App() {
	return (
		<div className="flex flex-col items-center mt-20 gap-10">
			<div>
				<Table items={sampleTableData} config={configArray} />
			</div>
		</div>
	);
}

export default App;
