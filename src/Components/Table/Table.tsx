import { FC, ReactNode } from 'react';
import { TTableDataItem } from '../../App';

export interface TData {
	key: string;
	[key: string]: string | number | boolean | undefined | null;
}

export type TTableConfig = {
	label: string;
	render?: (item: TData) => ReactNode;
};
type TTableProps = {
	items: Array<TData>;
	config: Array<TTableConfig>;
};

const Table: FC<TTableProps> = ({ items, config }) => {
	const renderRow = (item: TData) => {
		return config.map(({ label, render }) => (
			<td className="p-3" key={label}>
				{render ? render(item) : item[label]}
			</td>
		));
	};

	const renderRows = items.map((item) => (
		<tr className="border-b" key={item.key}>
			{renderRow(item)}
		</tr>
	));

	const renderHeaders = config.map(({ label }) => <th key={label}>{label}</th>);

	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderHeaders}</tr>
			</thead>
			<tbody>{renderRows}</tbody>
		</table>
	);
};

export default Table;
