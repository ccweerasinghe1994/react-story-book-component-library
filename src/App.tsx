import  { TData, TTableConfig } from './Components/Table/Table';
import SortableTable from "./Components/SortableTable/SortableTable.tsx";

export const sampleTableData: TData[] = [
	{ key: '0', name: 'orange', color: 'bg-orange-500', score: 1 },
	{ key: '1', name: 'apple', color: 'bg-red-500', score: 2 },
	{ key: '2', name: 'banana', color: 'bg-yellow-500', score: 3 },
	{ key: '3', name: 'grape', color: 'bg-purple-500', score: 4 },
	{ key: '4', name: 'pear', color: 'bg-green-500', score: 5 },
	{ key: '5', name: 'strawberry', color: 'bg-red-500', score: 6 },
	{ key: '6', name: 'blueberry', color: 'bg-blue-500', score: 7 },
	{ key: '7', name: 'mango', color: 'bg-yellow-500', score: 8 },
	{ key: '8', name: 'watermelon', color: 'bg-green-500', score: 9 },
	{ key: '9', name: 'kiwi', color: 'bg-green-500', score: 10 },
	{ key: '10', name: 'pineapple', color: 'bg-yellow-500', score: 11 },
];



export const configArray: TTableConfig[] = [
	{
		label: 'name',
		sortValue: (fruit) => fruit.name
	},
	{
		label: 'color',
		render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>
	},
	{
		label: 'score',
		header: (label) => <th className="bg-red-500">{label}</th>,
		sortValue: (fruit) => fruit.score
	},
];

function App() {
	return (
		<div className="flex flex-col items-center mt-20 gap-10">
			<div>
				<SortableTable items={sampleTableData} config={configArray} />
			</div>
		</div>
	);
}

export default App;
